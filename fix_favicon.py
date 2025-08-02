import os
from pathlib import Path

# Set base path
frontend_path = Path(__file__).resolve().parent
public_path = frontend_path / "public"
favicon_src = public_path / "favicon_v3.ico"
favicon_dst = public_path / "favicon.ico"
index_html = frontend_path / "index.html"
netlify_toml = frontend_path / "netlify.toml"

# Step 1: Ensure public/ exists
if not public_path.exists():
    public_path.mkdir()

# Step 2: Copy favicon
if favicon_src.exists():
    favicon_dst.write_bytes(favicon_src.read_bytes())
    print(f"✅ Copied: {favicon_src.name} → favicon.ico")
else:
    print(f"❌ Missing source file: {favicon_src}")

# Step 3: Update index.html to use /favicon.ico
if index_html.exists():
    content = index_html.read_text(encoding="utf-8")
    if 'rel="icon"' in content:
        import re
        content = re.sub(r'<link rel="icon".*?>', '<link rel="icon" type="image/x-icon" href="/favicon.ico" />', content)
    else:
        content = content.replace("<head>", '<head>\n    <link rel="icon" type="image/x-icon" href="/favicon.ico" />')
    index_html.write_text(content, encoding="utf-8")
    print("✅ index.html updated with favicon link.")
else:
    print("❌ index.html not found")

# Step 4: Create netlify.toml to disable caching
netlify_toml.write_text(
    """
[[headers]]
  for = "/favicon.ico"
  [headers.values]
    Cache-Control = "no-store"
""".strip(),
    encoding="utf-8"
)
print("✅ netlify.toml created to disable favicon caching.")
