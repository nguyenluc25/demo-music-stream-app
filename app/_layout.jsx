import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="login/index"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
}
