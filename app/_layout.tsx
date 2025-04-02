import { Stack } from "expo-router";
import Header from "@/components/Header";

export default function RootLayout() {
  return (
    <>
    <Header />
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}}/>
      {/* <Stack.Screen name="test" options={{ headerShown:false}}/>
      <Stack.Screen name="settings" options={{ headerShown: false}}/> */}
      <Stack.Screen name="home/(tabs)" options={{headerShown:false}} />
    </Stack>
    </>
  )
}
