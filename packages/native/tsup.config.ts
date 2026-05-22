import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: [
    "react",
    "react-native",
    "nativewind",
    "@gorhom/bottom-sheet",
    "react-native-gesture-handler",
    "react-native-reanimated",
    "react-native-safe-area-context",
    "expo-haptics",
    "@react-native-community/slider",
  ],
  treeshake: true,
});
