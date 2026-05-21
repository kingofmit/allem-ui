# Modal & Drawer

```tsx
import { Modal, ModalContent, Drawer, DrawerContent, Button } from "@allem-ui/react";
```

## Modal

Uses `react-aria-components` DialogTrigger + Modal. Click-outside and Escape dismiss by default.

### Modal Props

| Prop | Type | Default |
|------|------|---------|
| `isOpen` | `boolean` | — |
| `defaultOpen` | `boolean` | — |
| `onOpenChange` | `(isOpen: boolean) => void` | — |

### ModalContent Props

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | — |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` |
| `className` | `string` | — |

### Examples

```tsx
// Trigger-based (uncontrolled)
<Modal>
  <Button>Open</Button>
  <ModalContent title="Confirm Action" size="md">
    <p>Are you sure you want to proceed?</p>
    <div className="flex gap-2 justify-end mt-4">
      <Button variant="outline">Cancel</Button>
      <Button color="danger">Confirm</Button>
    </div>
  </ModalContent>
</Modal>

// Controlled
<Modal isOpen={showModal} onOpenChange={setShowModal}>
  <ModalContent title="Edit Profile" size="lg">
    <Input label="Name" value={name} onChange={setName} />
    <Button onPress={() => { save(); setShowModal(false); }}>Save</Button>
  </ModalContent>
</Modal>
```

## Drawer

Same pattern as Modal, slides in from an edge.

### DrawerContent Props

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | — |
| `placement` | `"left" \| "right" \| "top" \| "bottom"` | `"right"` |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` |
| `className` | `string` | — |

```tsx
<Drawer>
  <Button>Open Sidebar</Button>
  <DrawerContent title="Settings" placement="right" size="md">
    <p>Drawer content here</p>
  </DrawerContent>
</Drawer>
```

## Best practices

- First child of `<Modal>` / `<Drawer>` must be a focusable trigger element (usually a Button)
- For controlled modals without a trigger, you still wrap with `<Modal isOpen={...}>` but omit the trigger child
- Keep modals focused — one primary action per modal
- Use Drawer for sidebars, filters, and settings panels
