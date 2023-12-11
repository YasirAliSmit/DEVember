import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Days from "./day1/components/Days";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
//import { Kalnia_400Regular } from "@expo-google-fonts/kalnia";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useEffect } from "react";

// Keep the splash screen visible while we fetch resources

export default function App() {
  const numbers = [...Array(24)].map((val, index) => index + 1);
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  //  Kalnia_400Regular
  });
  useEffect(() => {
    if (fontsLoaded || fontError) {
      return SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={numbers}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={{ gap: 10 }} />}
        renderItem={({ item }) => <Days item={item} />}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 10,
  },
  content: {
    gap: 10,
  },

  column: {
    gap: 10,
  },
});
