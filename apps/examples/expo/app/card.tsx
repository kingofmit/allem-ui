import { Stack } from "expo-router";
import { ScrollView, View, Image } from "react-native";
import { Card, CardHeader, CardBody, CardFooter, Button, Text, Heading } from "@allem-ui/native";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

export default function CardScreen() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <Stack.Screen options={{ title: "Card" }} />
      <ScrollView className="flex-1 bg-white dark:bg-neutral-950 p-4">
        <Heading size="md" className="mb-2">Card</Heading>
        <Text size="sm" className="mb-6 text-neutral-500 dark:text-neutral-400">
          Content container with header, body, and footer sections.
        </Text>

        {/* Profile Card */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Profile Card
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Card with image, user info, and actions.
          </Text>
          <Card variant="elevated">
            <CardBody>
              <View style={{ alignItems: "center", paddingVertical: 8 }}>
                <Image
                  source={require("../assets/ahmed-allem-profile.png")}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    marginBottom: 12,
                    borderWidth: 3,
                    borderColor: isDark ? "#4f46e5" : "#6366f1",
                  }}
                />
                <Text style={{ fontSize: 18, fontWeight: "700", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
                  Ahmed Allem
                </Text>
                <Text style={{ fontSize: 14, color: isDark ? "#a3a3a3" : "#737373", marginBottom: 12 }}>
                  Creator of Allem UI
                </Text>
                <View style={{ flexDirection: "row", gap: 24, marginBottom: 4 }}>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "700", color: isDark ? "#ffffff" : "#171717" }}>34</Text>
                    <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3" }}>Components</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "700", color: isDark ? "#ffffff" : "#171717" }}>8</Text>
                    <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3" }}>Packages</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 16, fontWeight: "700", color: isDark ? "#ffffff" : "#171717" }}>v0.0.1</Text>
                    <Text style={{ fontSize: 12, color: isDark ? "#737373" : "#a3a3a3" }}>Version</Text>
                  </View>
                </View>
              </View>
            </CardBody>
            <CardFooter>
              <View style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}>
                <Button size="sm" onPress={() => {}}>
                  <Ionicons name="person-add" size={14} color="#ffffff" />
                  Follow
                </Button>
                <Button size="sm" variant="outline" onPress={() => {}}>
                  <Ionicons name="chatbubble-outline" size={14} color={isDark ? "#818cf8" : "#4f46e5"} />
                  Message
                </Button>
              </View>
            </CardFooter>
          </Card>
        </View>

        {/* Product Cards */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Product Cards
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            E-commerce style cards with images and pricing.
          </Text>
          <View style={{ flexDirection: "row", gap: 12 }}>
            {/* Hat */}
            <View style={{ flex: 1 }}>
              <Card>
                <CardBody>
                  <Image
                    source={require("../assets/product-hat.jpg")}
                    style={{
                      width: "100%",
                      height: 140,
                      borderRadius: 10,
                      marginBottom: 12,
                      backgroundColor: isDark ? "#262626" : "#f5f5f5",
                    }}
                    resizeMode="cover"
                  />
                  <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", fontWeight: "600", marginBottom: 4 }}>
                    New Pilot
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
                    Milano Cap
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 8 }}>
                    <Ionicons name="star" size={12} color="#f59e0b" />
                    <Ionicons name="star" size={12} color="#f59e0b" />
                    <Ionicons name="star" size={12} color="#f59e0b" />
                    <Ionicons name="star" size={12} color="#f59e0b" />
                    <Ionicons name="star-half" size={12} color="#f59e0b" />
                    <Text style={{ fontSize: 11, color: isDark ? "#737373" : "#a3a3a3", marginLeft: 2 }}>(4.5)</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                    <Text style={{ fontSize: 16, fontWeight: "700", color: isDark ? "#ffffff" : "#171717" }}>$49</Text>
                    <Text style={{ fontSize: 12, color: isDark ? "#525252" : "#a3a3a3", textDecorationLine: "line-through" }}>$65</Text>
                  </View>
                </CardBody>
                <CardFooter>
                  <Button size="sm" color="success" onPress={() => {}}>
                    <Ionicons name="cart-outline" size={14} color="#ffffff" />
                    Add
                  </Button>
                </CardFooter>
              </Card>
            </View>

            {/* Shirt */}
            <View style={{ flex: 1 }}>
              <Card>
                <CardBody>
                  <Image
                    source={require("../assets/product-shirt.png")}
                    style={{
                      width: "100%",
                      height: 140,
                      borderRadius: 10,
                      marginBottom: 12,
                      backgroundColor: isDark ? "#262626" : "#f5f5f5",
                    }}
                    resizeMode="cover"
                  />
                  <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", fontWeight: "600", marginBottom: 4 }}>
                    New Pilot
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
                    Pilot Shirt
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 8 }}>
                    <Ionicons name="star" size={12} color="#f59e0b" />
                    <Ionicons name="star" size={12} color="#f59e0b" />
                    <Ionicons name="star" size={12} color="#f59e0b" />
                    <Ionicons name="star" size={12} color="#f59e0b" />
                    <Ionicons name="star" size={12} color="#f59e0b" />
                    <Text style={{ fontSize: 11, color: isDark ? "#737373" : "#a3a3a3", marginLeft: 2 }}>(5.0)</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                    <Text style={{ fontSize: 16, fontWeight: "700", color: isDark ? "#ffffff" : "#171717" }}>$89</Text>
                    <Text style={{ fontSize: 12, color: isDark ? "#525252" : "#a3a3a3", textDecorationLine: "line-through" }}>$120</Text>
                  </View>
                </CardBody>
                <CardFooter>
                  <Button size="sm" color="success" onPress={() => {}}>
                    <Ionicons name="cart-outline" size={14} color="#ffffff" />
                    Add
                  </Button>
                </CardFooter>
              </Card>
            </View>
          </View>
        </View>

        {/* Outline */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Outline (Default)
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Bordered card with header, body, and footer.
          </Text>
          <Card>
            <CardHeader>
              <Text style={{ fontSize: 16, fontWeight: "600", color: isDark ? "#ffffff" : "#171717" }}>
                Card Title
              </Text>
            </CardHeader>
            <CardBody>
              <Text style={{ fontSize: 14, color: isDark ? "#a3a3a3" : "#525252" }}>
                This is the card body with some content inside.
              </Text>
            </CardBody>
            <CardFooter>
              <Button size="sm" onPress={() => {}}>Action</Button>
            </CardFooter>
          </Card>
        </View>

        {/* Filled */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Filled
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Subtle background fill without border.
          </Text>
          <Card variant="filled">
            <CardHeader>
              <Text style={{ fontSize: 16, fontWeight: "600", color: isDark ? "#ffffff" : "#171717" }}>
                Filled Card
              </Text>
            </CardHeader>
            <CardBody>
              <Text style={{ fontSize: 14, color: isDark ? "#a3a3a3" : "#525252" }}>
                Card with a filled background for subtle separation.
              </Text>
            </CardBody>
          </Card>
        </View>

        {/* Elevated */}
        <View
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: isDark ? "#262626" : "#e5e5e5",
            backgroundColor: isDark ? "#171717" : "#f9fafb",
            padding: 20,
            marginBottom: 24,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: isDark ? "#ffffff" : "#171717", marginBottom: 4 }}>
            Elevated
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#737373" : "#a3a3a3", marginBottom: 16 }}>
            Shadow elevation for floating card effect.
          </Text>
          <Card variant="elevated">
            <CardHeader>
              <Text style={{ fontSize: 16, fontWeight: "600", color: isDark ? "#ffffff" : "#171717" }}>
                Elevated Card
              </Text>
            </CardHeader>
            <CardBody>
              <Text style={{ fontSize: 14, color: isDark ? "#a3a3a3" : "#525252" }}>
                Card with shadow elevation for a floating appearance.
              </Text>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="outline" onPress={() => {}}>Learn More</Button>
            </CardFooter>
          </Card>
        </View>

        {/* Info */}
        <View
          style={{
            borderRadius: 12,
            backgroundColor: isDark ? "rgba(79,70,229,0.1)" : "#eef2ff",
            borderWidth: 1,
            borderColor: isDark ? "#312e81" : "#c7d2fe",
            padding: 16,
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "600", color: isDark ? "#a5b4fc" : "#4338ca", marginBottom: 4 }}>
            How it works
          </Text>
          <Text style={{ fontSize: 13, color: isDark ? "#818cf8" : "#4f46e5", lineHeight: 20 }}>
            3 variants: outline (bordered), filled (background), elevated (shadow). Composable with CardHeader, CardBody, and CardFooter. Header and footer have separator borders.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
