import { StyleSheet, Text, View } from "react-native";

export default function LanguageSettings() {
  const styles = StyleSheet.create({
    container : {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 40,
      backgroundColor: "#f0f0f0",
    },
    title : {
      color: "#333",
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Footer</Text>
    </View>
  )
}