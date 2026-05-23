# Mobile-Only Components

10 components exclusive to `@allem-ui/native` with no web equivalent.

## BottomSheet

Requires: `@gorhom/bottom-sheet`, `react-native-reanimated`

```tsx
import { BottomSheet } from "@allem-ui/native";

<BottomSheet visible={show} onClose={() => setShow(false)} snapPoints={["25%", "50%"]}>
  {/* content */}
</BottomSheet>
```

## ActionSheet

Requires: `@gorhom/bottom-sheet`

```tsx
import { ActionSheet } from "@allem-ui/native";

<ActionSheet
  visible={show}
  onClose={() => setShow(false)}
  actions={[
    { label: "Edit", onPress: handleEdit },
    { label: "Delete", onPress: handleDelete, destructive: true },
    { label: "Cancel", onPress: () => setShow(false), cancel: true },
  ]}
/>
```

## SwipeableRow

Requires: `react-native-gesture-handler`

```tsx
import { SwipeableRow } from "@allem-ui/native";

<SwipeableRow
  leftActions={[{ label: "Archive", color: "#059669", onPress: handleArchive }]}
  rightActions={[{ label: "Delete", color: "#dc2626", onPress: handleDelete }]}
>
  <View>{/* row content */}</View>
</SwipeableRow>
```

## PullToRefresh

Uses built-in `RefreshControl`:

```tsx
import { PullToRefresh } from "@allem-ui/native";

<PullToRefresh onRefresh={fetchData} refreshing={loading}>
  <ScrollView>{/* content */}</ScrollView>
</PullToRefresh>
```

## FAB (Floating Action Button)

```tsx
import { FAB } from "@allem-ui/native";

<FAB
  onPress={handleAdd}
  icon={<PlusIcon size={24} color="#fff" />}
  position="bottom-right"
  size="md"
  color="primary"
/>
```

Positions: `bottom-right`, `bottom-left`, `bottom-center`. Colors: `primary`, `neutral`, `danger`, `success`, `warning`.

## OTPInput

```tsx
import { OTPInput } from "@allem-ui/native";

<OTPInput
  length={6}
  value={otp}
  onValueChange={setOtp}
  onComplete={(code) => verify(code)}
/>
```

## SearchBar

```tsx
import { SearchBar } from "@allem-ui/native";

<SearchBar
  value={query}
  onChangeText={setQuery}
  placeholder="Search..."
  onClear={() => setQuery("")}
/>
```

## SegmentedControl

```tsx
import { SegmentedControl } from "@allem-ui/native";

<SegmentedControl
  segments={["All", "Active", "Completed"]}
  selectedIndex={index}
  onIndexChange={setIndex}
/>
```

## StatusBarManager

```tsx
import { StatusBarManager } from "@allem-ui/native";

<StatusBarManager style="light" backgroundColor="#000000" />
```

## useHaptic

Requires: `expo-haptics`

```tsx
import { useHaptic } from "@allem-ui/native";

const { trigger } = useHaptic();

<Button onPress={() => { trigger("medium"); handleAction(); }}>
  Tap me
</Button>
```

Intensities: `"light"`, `"medium"`, `"heavy"`.

## Best Practices

- Always check optional peer deps are installed before using BottomSheet, ActionSheet, SwipeableRow, or useHaptic
- Use `useSafeAreaInsets()` for bottom padding in BottomSheet/ActionSheet/Drawer/Select
- FAB should be positioned absolute within the screen container, not inside a ScrollView
- useHaptic gracefully degrades — returns a no-op if `expo-haptics` is not installed
