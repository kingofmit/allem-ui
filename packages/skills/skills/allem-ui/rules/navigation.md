# Navigation Components

```tsx
import {
  Tabs, TabList, Tab, TabPanel,
  Breadcrumbs, BreadcrumbItem,
  Pagination,
} from "@allem-ui/react";
```

## Tabs

| Prop | Type | Default |
|------|------|---------|
| `variant` | `"underline" \| "solid" \| "pills"` | `"underline"` |
| `selectedKey` | `Key` | — |
| `defaultSelectedKey` | `Key` | — |
| `onSelectionChange` | `(key: Key) => void` | — |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` |

```tsx
<Tabs variant="underline">
  <TabList>
    <Tab id="overview">Overview</Tab>
    <Tab id="settings">Settings</Tab>
    <Tab id="billing">Billing</Tab>
  </TabList>
  <TabPanel id="overview">Overview content</TabPanel>
  <TabPanel id="settings">Settings content</TabPanel>
  <TabPanel id="billing">Billing content</TabPanel>
</Tabs>

// Pills variant
<Tabs variant="pills">
  <TabList>
    <Tab id="all">All</Tab>
    <Tab id="active">Active</Tab>
    <Tab id="archived">Archived</Tab>
  </TabList>
  ...
</Tabs>
```

Variants: `underline` (bottom border indicator), `solid` (segmented control), `pills` (rounded pill buttons).

## Breadcrumbs

```tsx
<Breadcrumbs>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem>Current Page</BreadcrumbItem>
</Breadcrumbs>
```

- Items with `href` render as links, last item (no `href`) renders as current page
- Separator is rendered via CSS, not configurable

## Pagination

| Prop | Type | Default |
|------|------|---------|
| `total` | `number` | required |
| `current` | `number` | required |
| `onChange` | `(page: number) => void` | required |
| `siblings` | `number` | `1` |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |

```tsx
const [page, setPage] = useState(1);

<Pagination total={20} current={page} onChange={setPage} />
<Pagination total={100} current={page} onChange={setPage} siblings={2} size="sm" />
```

Smart ellipsis — always shows first/last page and `siblings` pages around current.
