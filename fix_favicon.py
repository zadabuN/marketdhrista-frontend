import shutil
import os

# Paths
source = "public/favicon_aug2025.ico"
target = "public/favicon.ico"

# Copy and overwrite if exists
try:
    shutil.copyfile(source, target)
    print(f"✅ Copied {source} → {target}")
except Exception as e:
    print(f"❌ Failed: {e}")

# Create netlify.toml in root
netlify_toml = "netlify.toml"
netlify_config = """
[[headers]]
  for = "/favicon.ico"
  [headers.values]
    Cache-Control = "no-cache"
"""

try:
    with open(netlify_toml, "w", encoding="utf-8") as f:
        f.write(netlify_config.strip())
    print("✅ Created netlify.toml with cache disabling for favicon.ico")
except Exception as e:
    print(f"❌ Failed to write netlify.toml: {e}")
