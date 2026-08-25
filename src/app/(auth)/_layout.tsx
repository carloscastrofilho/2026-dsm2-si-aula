import { Redirect, Stack } from "expo-router";

const isLoggedIn = false;

export default function AuthLayout() {
  if ( !isLoggedIn){
    return <Redirect href={"/(auth)/login"} />
  }
  return <Stack>
    <Stack.Screen 
      name="(dash)"
      options={{
        headerShown: false,
      }}
    />
  </Stack>;
}
