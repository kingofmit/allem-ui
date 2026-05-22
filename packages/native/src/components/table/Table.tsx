import { View, Text, ScrollView } from "react-native";
import { createContext, useContext, Children, cloneElement, isValidElement } from "react";
import type { ReactNode } from "react";
import { useColorScheme } from "nativewind";

type TableVariant = "simple" | "striped" | "bordered";

const TableContext = createContext<{ variant: TableVariant; isDark: boolean }>({
  variant: "simple",
  isDark: false,
});

export interface TableProps {
  variant?: TableVariant;
  children: ReactNode;
  className?: string;
}

export interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

export interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

export interface TableRowProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

export interface TableHeadProps {
  children: ReactNode;
  width?: number;
  className?: string;
}

export interface TableCellProps {
  children: ReactNode;
  width?: number;
  className?: string;
}

export function Table({ variant = "simple", children }: TableProps) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <TableContext.Provider value={{ variant, isDark }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        accessibilityRole="none"
        accessibilityLabel="Data table"
        style={{
          borderRadius: 12,
          borderWidth: 1,
          borderColor: isDark ? "#262626" : "#e5e5e5",
          overflow: "hidden",
        }}
      >
        <View style={{ minWidth: "100%" }}>{children}</View>
      </ScrollView>
    </TableContext.Provider>
  );
}

export function TableHeader({ children }: TableHeaderProps) {
  const { variant, isDark } = useContext(TableContext);

  return (
    <View
      style={{
        borderBottomWidth: variant === "bordered" ? 2 : 1,
        borderBottomColor: isDark ? "#262626" : "#e5e5e5",
        backgroundColor: isDark ? "rgba(23,23,23,0.5)" : "rgba(250,250,250,1)",
      }}
    >
      {children}
    </View>
  );
}

export function TableBody({ children }: TableBodyProps) {
  const indexedChildren = Children.map(children, (child, i) => {
    if (isValidElement(child)) {
      return cloneElement(child as React.ReactElement<any>, { index: i });
    }
    return child;
  });

  return <View>{indexedChildren}</View>;
}

export function TableRow({ children, index = 0 }: TableRowProps) {
  const { variant, isDark } = useContext(TableContext);
  const isEven = index % 2 === 0;

  const style: any = {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: isDark ? "rgba(38,38,38,0.5)" : "rgba(245,245,245,1)",
  };

  if (variant === "striped" && !isEven) {
    style.backgroundColor = isDark ? "rgba(38,38,38,0.3)" : "rgba(250,250,250,0.5)";
  }

  if (variant === "bordered") {
    style.borderBottomColor = isDark ? "#404040" : "#d4d4d4";
  }

  return (
    <View style={style} accessibilityRole="none">
      {children}
    </View>
  );
}

export function TableHead({ children, width }: TableHeadProps) {
  const { variant, isDark } = useContext(TableContext);

  const style: any = {
    paddingHorizontal: 16,
    paddingVertical: 12,
  };

  if (width) style.width = width;
  else style.flex = 1;

  if (variant === "bordered") {
    style.borderRightWidth = 1;
    style.borderRightColor = isDark ? "#404040" : "#d4d4d4";
  }

  return (
    <View style={style}>
      <Text
        style={{
          fontSize: 11,
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: 0.8,
          color: isDark ? "#a3a3a3" : "#737373",
        }}
      >
        {children}
      </Text>
    </View>
  );
}

export function TableCell({ children, width }: TableCellProps) {
  const { variant, isDark } = useContext(TableContext);

  const style: any = {
    paddingHorizontal: 16,
    paddingVertical: 12,
  };

  if (width) style.width = width;
  else style.flex = 1;

  if (variant === "bordered") {
    style.borderRightWidth = 1;
    style.borderRightColor = isDark ? "#404040" : "#d4d4d4";
  }

  return (
    <View style={style}>
      {typeof children === "string" || typeof children === "number" ? (
        <Text
          style={{
            fontSize: 14,
            color: isDark ? "#d4d4d4" : "#404040",
          }}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </View>
  );
}
