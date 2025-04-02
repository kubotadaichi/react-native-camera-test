import { StyleSheet, Text, View } from "react-native";

export default function Test() {

  const styles = StyleSheet.create({
    container : {
      flex: 1,
    },
  })

  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  )

}