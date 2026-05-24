#!/bin/bash
set -e

# Allem UI — Publish All Packages
# Usage: ./scripts/publish-all.sh [bump-type] [message]
# Example: ./scripts/publish-all.sh patch "Dashboard examples + bug fixes"
# Default bump: patch

BUMP=${1:-patch}
MESSAGE=${2:-"Version bump"}

# Validate bump type
if [[ "$BUMP" != "patch" && "$BUMP" != "minor" && "$BUMP" != "major" ]]; then
  echo "Error: bump-type must be patch, minor, or major"
  exit 1
fi

# Collect all public packages
echo "📦 Allem UI — Publish All Packages"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Current versions:"
echo ""

PACKAGES=()
for pkg_json in packages/*/package.json; do
  DIR=$(dirname "$pkg_json")
  NAME=$(node -p "require('./$pkg_json').name")
  VERSION=$(node -p "require('./$pkg_json').version")
  PRIVATE=$(node -p "require('./$pkg_json').private || false")

  if [ "$PRIVATE" = "true" ]; then
    continue
  fi

  PACKAGES+=("$NAME")
  printf "  %-30s %s\n" "$NAME" "$VERSION"
done

echo ""
echo "Bump type: $BUMP"
echo "Message:   $MESSAGE"
echo "Packages:  ${#PACKAGES[@]}"
echo ""

# Confirm
read -p "Proceed with $BUMP bump for all ${#PACKAGES[@]} packages? [y/N] " CONFIRM
if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
  echo "Aborted."
  exit 0
fi

echo ""

# Step 1: Create a single changeset for all packages
CHANGESET_FILE=".changeset/all-packages-release.md"
{
  echo "---"
  for PKG in "${PACKAGES[@]}"; do
    echo "\"${PKG}\": ${BUMP}"
  done
  echo "---"
  echo ""
  echo "$MESSAGE"
} > "$CHANGESET_FILE"
echo "✅ Created changeset: $CHANGESET_FILE"

# Step 2: Version
pnpm changeset version
echo "✅ Versions bumped"

# Step 3: Show new versions
echo ""
echo "New versions:"
echo ""
for pkg_json in packages/*/package.json; do
  NAME=$(node -p "require('./$pkg_json').name")
  VERSION=$(node -p "require('./$pkg_json').version")
  PRIVATE=$(node -p "require('./$pkg_json').private || false")

  if [ "$PRIVATE" = "true" ]; then
    continue
  fi

  printf "  %-30s %s\n" "$NAME" "$VERSION"
done

echo ""
echo "Run 'pnpm release' to build and publish all packages to npm."
