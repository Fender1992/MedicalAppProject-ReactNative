import { TextInput, View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Input({
  label,
  value,
  textInputConfig,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <LinearGradient
      colors={["#413ccc", "#74f0d1"]}
      style={{ borderRadius: 25, elevation: 20 }}
    >
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            value={value}
            {...textInputConfig}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

export function SignUpInput() {
  return (
    <LinearGradient>
      <View></View>
    </LinearGradient>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 14,
    paddingBottom: 10,
  },
  label: {
    fontSize: 26,
    color: "#0A0A0A",
  },
  input: {
    backgroundColor: "#DADEE1",
    height: 42,
    borderRadius: 10,
    fontSize: 30,
  },
});
