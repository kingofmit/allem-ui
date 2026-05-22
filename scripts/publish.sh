#!/bin/bash
set -e

# Allem UI — Publish Script
# Usage: ./scripts/publish.sh <package-name> <bump-type> <message>
# Example: ./scripts/publish.sh @allem-ui/react patch "Fix React 19 children type compatibility"
# Example: ./scripts/publish.sh @allem-ui/native minor "Add new components"

PACKAGE=$1
BUMP=$2
MESSAGE=$3

if [ -z "$PACKAGE" ] || [ -z "$BUMP" ] || [ -z "$MESSAGE" ]; then
  echo "Usage: ./scripts/publish.sh <package-name> <bump-type> <message>"
  echo "  package-name: e.g. @allem-ui/react, @allem-ui/native"
  echo "  bump-type: patch | minor | major"
  echo "  message: changeset description"
  exit 1
fi

# Validate bump type
if [[ "$BUMP" != "patch" && "$BUMP" != "minor" && "$BUMP" != "major" ]]; then
  echo "Error: bump-type must be patch, minor, or major"
  exit 1
fi

# Generate a slug from the package name
SLUG=$(echo "$PACKAGE" | sed 's/@//g' | sed 's/\//-/g')

echo "📦 Publishing $PACKAGE ($BUMP)"
echo ""

# Step 1: Create changeset
CHANGESET_FILE=".changeset/${SLUG}-release.md"
cat > "$CHANGESET_FILE" << EOF
---
"${PACKAGE}": ${BUMP}
---

${MESSAGE}
EOF
echo "✅ Created changeset: $CHANGESET_FILE"

# Step 2: Version
pnpm changeset version
echo "✅ Version bumped"

# Step 3: Build the package
pnpm --filter "$PACKAGE" build
echo "✅ Build passed"

# Step 4: Publish
pnpm changeset publish
echo "✅ Published to npm"

# Step 5: Commit and push
VERSION=$(node -p "require('./packages/' + '${PACKAGE}'.split('/')[1] + '/package.json').version")
git add -A
git commit -m "chore: publish ${PACKAGE}@${VERSION} — ${MESSAGE}"
git push origin main --tags
echo "✅ Pushed to git with tags"

echo ""
echo "🎉 ${PACKAGE}@${VERSION} is live on npm!"
