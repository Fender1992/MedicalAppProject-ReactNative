import { Pressable, View, StyleSheet, Text } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "##413CCC" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 10,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#5D59C4",
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
  },
});
