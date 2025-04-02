import { Link } from "expo-router";
import { router } from "expo-router";
import { Button, Text, View, StyleSheet } from "react-native";

export default function Index() {

  const styles = StyleSheet.create({
    container : {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      // flexDirection: "row",
    },
    text: {
      color: "black",
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text> */}
      <Button title="login" onPress={() => router.push("/home/top")} />
      {/* <Link href="/test"> Go to Test</Link> */}
      {/* <Button
        title="Language Settings"
        onPress={() => router.navigate("/settings/language")}
      />
      <Button
        title="Profile Settings"
        onPress={() => router.navigate("/settings/profile")}
      /> */}
      {/* <Button title="Go to Test" onPress={() => router.navigate("/test")}></Button> */}
      {/* <View style={styles.redBox} />
      <View style={styles.greenBox} />
      <View style={styles.blueBox} /> */}

    </View>
  );
}

