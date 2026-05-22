import { View, Text, Pressable, Modal, FlatList, ScrollView } from "react-native";
import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { useHaptic } from "../../hooks/useHaptic";

export interface SelectItemData {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  items: SelectItemData[];
  selectedKey?: string;
  defaultSelectedKey?: string;
  onSelectionChange?: (key: string) => void;
  isDisabled?: boolean;
  className?: string;
}

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5",
  md: "px-3 py-2",
  lg: "px-4 py-3",
};

const textSizeStyles: Record<string, string> = {
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
};

export function Select({
  label,
  description,
  errorMessage,
  placeholder = "Select...",
  size = "md",
  items,
  selectedKey: controlledKey,
  defaultSelectedKey = "",
  onSelectionChange,
  isDisabled = false,
  className,
}: SelectProps) {
  const [internalKey, setInternalKey] = useState(defaultSelectedKey);
  const [isOpen, setIsOpen] = useState(false);
  const { selection } = useHaptic();

  const selectedKey = controlledKey !== undefined ? controlledKey : internalKey;
  const selectedItem = items.find((item) => item.id === selectedKey);

  const handleSelect = (key: string) => {
    if (controlledKey === undefined) setInternalKey(key);
    onSelectionChange?.(key);
    setIsOpen(false);
  };

  return (
    <View className={cn("gap-1.5", className)}>
      {label && (
        <Text className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </Text>
      )}
      <Pressable
        className={cn(
          "flex-row items-center justify-between rounded-lg border bg-white dark:bg-neutral-950",
          errorMessage
            ? "border-red-400 dark:border-red-500"
            : "border-neutral-200 dark:border-neutral-800",
          sizeStyles[size],
          isDisabled && "opacity-50",
        )}
        onPress={() => !isDisabled && setIsOpen(true)}
        disabled={isDisabled}
        accessibilityRole="button"
        accessibilityLabel={label ? `${label}: ${selectedItem?.label || placeholder}` : undefined}
      >
        <Text
          className={cn(
            textSizeStyles[size],
            selectedItem
              ? "text-neutral-900 dark:text-white"
              : "text-neutral-400 dark:text-neutral-500",
          )}
        >
          {selectedItem?.label || placeholder}
        </Text>
        <Text className="ml-2 text-neutral-400">▼</Text>
      </Pressable>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <Pressable
          className="flex-1 justify-end bg-black/40"
          onPress={() => setIsOpen(false)}
        >
          <View className="bg-white dark:bg-neutral-900 rounded-t-2xl max-h-[60%] pb-8">
            <View className="items-center py-3">
              <View className="h-1 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            </View>
            {label && (
              <Text className="px-4 pb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {label}
              </Text>
            )}
            <ScrollView>
              {items.map((item) => (
                <Pressable
                  key={item.id}
                  className={cn(
                    "px-4 py-3",
                    item.id === selectedKey && "bg-indigo-50 dark:bg-indigo-950/50",
                    item.disabled && "opacity-50",
                  )}
                  onPress={() => { if (!item.disabled) { selection(); handleSelect(item.id); } }}
                  disabled={item.disabled}
                  accessibilityRole="menuitem"
                  accessibilityLabel={item.label}
                  accessibilityState={{ selected: item.id === selectedKey, disabled: item.disabled }}
                  style={({ pressed }: { pressed: boolean }) => ({
                    backgroundColor: pressed ? "rgba(128,128,128,0.12)" : item.id === selectedKey ? undefined : "transparent",
                  })}
                >
                  <Text
                    className={cn(
                      "text-base",
                      item.id === selectedKey
                        ? "text-indigo-700 font-medium dark:text-indigo-300"
                        : "text-neutral-700 dark:text-neutral-300",
                    )}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>

      {description && !errorMessage && (
        <Text className="text-xs text-neutral-500 dark:text-neutral-400">
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text className="text-xs text-red-500 dark:text-red-400" accessibilityRole="alert">{errorMessage}</Text>
      )}
    </View>
  );
}
