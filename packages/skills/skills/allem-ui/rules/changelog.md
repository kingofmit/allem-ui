# Changelog

```bash
npm i @allem-ui/changelog
```

```tsx
import {
  ChangelogTimeline,
  ChangelogEntry,
  VersionBadge,
  ChangelogGroup,
  ChangelogGroupItem,
} from "@allem-ui/changelog";
```

Peer dependencies: `@allem-ui/react`, `@allem-ui/theme`, `react`, `tailwindcss`.

## Basic changelog

```tsx
<ChangelogTimeline>
  <ChangelogEntry
    date="May 15, 2025"
    version="2.0.0"
    title="Major Release"
    description="Complete redesign with new component architecture."
    type="added"
  >
    <ChangelogGroup type="added">
      <ChangelogGroupItem>New DataGrid component</ChangelogGroupItem>
      <ChangelogGroupItem>Chat UI components</ChangelogGroupItem>
      <ChangelogGroupItem>Kanban board</ChangelogGroupItem>
    </ChangelogGroup>
    <ChangelogGroup type="changed">
      <ChangelogGroupItem>Updated Button API</ChangelogGroupItem>
      <ChangelogGroupItem>Redesigned theme tokens</ChangelogGroupItem>
    </ChangelogGroup>
    <ChangelogGroup type="fixed">
      <ChangelogGroupItem>Modal focus trap on mobile</ChangelogGroupItem>
    </ChangelogGroup>
  </ChangelogEntry>

  <ChangelogEntry
    date="April 1, 2025"
    version="1.2.0"
    title="New Components"
    type="added"
  >
    <ChangelogGroup type="added">
      <ChangelogGroupItem>Drawer component</ChangelogGroupItem>
      <ChangelogGroupItem>Context menu</ChangelogGroupItem>
    </ChangelogGroup>
  </ChangelogEntry>
</ChangelogTimeline>
```

## ChangelogEntry Props

| Prop | Type | Default |
|------|------|---------|
| `date` | `string` | required |
| `version` | `string` | required |
| `title` | `string` | required |
| `description` | `string` | — |
| `type` | `"added" \| "changed" \| "fixed" \| "removed" \| "deprecated"` | `"added"` |
| `children` | `ReactNode` | — |

The `type` controls the timeline dot color:
- `added` — green
- `changed` — indigo
- `fixed` — amber
- `removed` — red
- `deprecated` — gray

## VersionBadge

Auto-detects version type from semver format.

```tsx
<VersionBadge version="2.0.0" />  {/* Major — indigo */}
<VersionBadge version="1.3.0" />  {/* Minor — green */}
<VersionBadge version="1.2.5" />  {/* Patch — gray */}
```

Override: `<VersionBadge version="2.0.0" type="minor" />`.

## ChangelogGroup Types

Group items by change type. Each group gets a colored dot and label.

```tsx
<ChangelogGroup type="added">...</ChangelogGroup>    {/* Green "Added" */}
<ChangelogGroup type="changed">...</ChangelogGroup>  {/* Indigo "Changed" */}
<ChangelogGroup type="fixed">...</ChangelogGroup>    {/* Amber "Fixed" */}
<ChangelogGroup type="removed">...</ChangelogGroup>  {/* Red "Removed" */}
<ChangelogGroup type="deprecated">...</ChangelogGroup> {/* Gray "Deprecated" */}
```
