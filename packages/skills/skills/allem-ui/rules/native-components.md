# Native Components

```tsx
import { Button, Input, Badge, Avatar, Modal } from "@allem-ui/native";
```

All 34 web components are ported with the same prop API: `variant`, `size`, `color`, `className`.

## Button

```tsx
import { Button } from "@allem-ui/native";

<Button variant="solid" color="primary" size="md" onPress={() => {}}>
  Save
</Button>

// With icon (pass ReactNode, not icon name)
<Button variant="outline" color="danger">
  <TrashIcon size={16} color="#dc2626" />
  Delete
</Button>
```

**How icons work:** Button uses `Children.map` to separate icon ReactNodes from text strings. Icons render as-is, text gets wrapped in `<Text>`. The `gap: 6` on Pressable spaces them.

## Input

```tsx
<Input
  label="Email"
  placeholder="you@example.com"
  size="md"
  leftIcon={<MailIcon />}
  rightIcon={<CheckIcon />}
/>
```

Props: `label`, `placeholder`, `size`, `leftIcon`, `rightIcon`, `error`, `disabled`.

## Textarea

```tsx
<Textarea label="Message" placeholder="Type here..." size="md" disabled={false} />
```

## Select

Bottom-sheet picker with slide-up animation:

```tsx
<Select
  label="Country"
  items={[
    { label: "United States", value: "us" },
    { label: "United Kingdom", value: "uk" },
  ]}
  value={selected}
  onValueChange={setSelected}
  chevronIcon={<ChevronDownIcon />}
/>
```

## Checkbox / Switch / Radio

```tsx
<Checkbox checked={val} onChange={setVal} label="I agree" size="md" />
<Switch value={val} onValueChange={setVal} label="Notifications" />
<RadioGroup value={val} onValueChange={setVal} size="md">
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
</RadioGroup>
```

## Slider

```tsx
<Slider value={val} onValueChange={setVal} min={0} max={100} step={1} color="primary" />
```

Uses View responder props (not PanResponder) with `pageX` + `measureInWindow` for accurate positioning.

## Avatar

```tsx
// URL image
<Avatar src="https://example.com/photo.jpg" name="Ahmed" size="lg" status="online" />

// Local image
<Avatar src={require("./photo.png")} name="Ahmed" size="md" />

// Initials fallback
<Avatar name="Ahmed Allem" size="lg" />
```

Props: `src` (string or require() number), `name`, `size`, `status` (`online`, `away`, `busy`, `offline`).

## Badge

```tsx
<Badge variant="solid" color="success" size="md" icon={<CheckIcon />}>
  Active
</Badge>
```

## Modal / Drawer

```tsx
<Modal visible={show} onClose={() => setShow(false)} title="Confirm">
  <Text>Are you sure?</Text>
  <Button onPress={() => setShow(false)}>Close</Button>
</Modal>

<Drawer visible={show} onClose={() => setShow(false)} placement="right" title="Settings">
  {/* content */}
</Drawer>
```

## Toast

```tsx
import { useToast } from "@allem-ui/native";

const { toast } = useToast();
toast({ title: "Saved!", variant: "success", duration: 3000 });
```

## Table

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Ahmed</TableCell>
      <TableCell>ahmed@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Breadcrumbs

```tsx
<Breadcrumbs separator={<ChevronIcon />}>
  <BreadcrumbItem onPress={() => {}}>Home</BreadcrumbItem>
  <BreadcrumbItem>Settings</BreadcrumbItem>
</Breadcrumbs>
```

## Best Practices

- Use **inline styles** for all visual properties — NativeWind className is unreliable on Animated.View, Pressable, etc.
- Pass icons as **ReactNode props** — never depend on `@expo/vector-icons` in library components
- Use `isDark` conditional from `useTheme()` or `useColorScheme()` for dark mode colors
- Keep color values as **hex strings** (e.g., `"#4f46e5"`) — no Tailwind class names in style objects
