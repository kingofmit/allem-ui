# Form Components

```tsx
import {
  Select, SelectItem,
  Checkbox,
  RadioGroup, Radio,
  Switch,
  Slider,
} from "@allem-ui/react";
```

## Select

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | — |
| `description` | `string` | — |
| `errorMessage` | `string` | — |
| `placeholder` | `string` | `"Select..."` |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `selectedKey` | `Key` | — |
| `onSelectionChange` | `(key: Key) => void` | — |
| `isDisabled` | `boolean` | `false` |

```tsx
<Select label="Country" onSelectionChange={setCountry}>
  <SelectItem id="us">United States</SelectItem>
  <SelectItem id="uk">United Kingdom</SelectItem>
  <SelectItem id="ca">Canada</SelectItem>
</Select>
```

## Checkbox

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | — |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `isSelected` | `boolean` | — |
| `defaultSelected` | `boolean` | — |
| `onChange` | `(isSelected: boolean) => void` | — |
| `isDisabled` | `boolean` | `false` |
| `isIndeterminate` | `boolean` | `false` |

```tsx
<Checkbox defaultSelected>Remember me</Checkbox>
<Checkbox isIndeterminate>Select all</Checkbox>
```

## RadioGroup & Radio

```tsx
<RadioGroup label="Plan" value={plan} onChange={setPlan}>
  <Radio value="free">Free</Radio>
  <Radio value="pro">Pro</Radio>
  <Radio value="team">Team</Radio>
</RadioGroup>
```

RadioGroup props: `label`, `description`, `errorMessage`, `value`, `defaultValue`, `onChange`, `orientation`, `isDisabled`, `isRequired`.

## Switch

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | — |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `isSelected` | `boolean` | — |
| `defaultSelected` | `boolean` | — |
| `onChange` | `(isSelected: boolean) => void` | — |

```tsx
<Switch defaultSelected>Dark mode</Switch>
```

## Slider

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | — |
| `showOutput` | `boolean` | `false` |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` |
| `minValue` | `number` | `0` |
| `maxValue` | `number` | `100` |
| `step` | `number` | `1` |
| `value` | `number` | — |
| `defaultValue` | `number` | — |
| `onChange` | `(value: number) => void` | — |

```tsx
<Slider label="Volume" defaultValue={50} showOutput />
<Slider label="Price" minValue={0} maxValue={1000} step={10} />
```
