import "../global.css";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider, ThemeProvider, ThemeToggle, useTheme } from "@allem-ui/native";
import { Ionicons } from "@expo/vector-icons";

function AppStack() {
  const { isDark } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
        },
        headerTintColor: "#00E5CC",
        headerTitleStyle: {
          fontWeight: "600",
          color: isDark ? "#ffffff" : "#0a0a0a",
        },
        headerBackTitle: "Back",
        contentStyle: {
          backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
        },
        headerRight: () => (
          <ThemeToggle
            size="md"
            lightIcon={(s) => <Ionicons name="sunny-outline" size={s} color="#f59e0b" />}
            darkIcon={(s) => <Ionicons name="moon-outline" size={s} color="#a5b4fc" />}
          />
        ),
      }}
    />
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <ToastProvider>
            <AppStack />
          </ToastProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
