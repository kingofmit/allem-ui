import { StatusBar } from "react-native";
import { useEffect } from "react";

export interface StatusBarManagerProps {
  style?: "default" | "light-content" | "dark-content";
  backgroundColor?: string;
  hidden?: boolean;
  animated?: boolean;
  translucent?: boolean;
}

export function StatusBarManager({
  style = "default",
  backgroundColor,
  hidden = false,
  animated = true,
  translucent = true,
}: StatusBarManagerProps) {
  useEffect(() => {
    StatusBar.setBarStyle(style, animated);
    if (backgroundColor) {
      StatusBar.setBackgroundColor(backgroundColor, animated);
    }
    StatusBar.setHidden(hidden, animated ? "fade" : "none");
    StatusBar.setTranslucent(translucent);
  }, [style, backgroundColor, hidden, animated, translucent]);

  return (
    <StatusBar
      barStyle={style}
      backgroundColor={backgroundColor}
      hidden={hidden}
      animated={animated}
      translucent={translucent}
    />
  );
}
