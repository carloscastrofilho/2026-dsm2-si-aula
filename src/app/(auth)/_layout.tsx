import { Redirect, Stack } from "expo-router";

const isLoggedIn = true;

export default function AuthLayout() {
  if (!isLoggedIn) {
    return <Redirect href={"/login"} />;
  }
  return (
    <Stack>
      <Stack.Screen
        name="(dash)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
