import { TextInput, View } from "react-native";

function Input({ label, textInputConfig }) {
  return (
    <View>
      <View>
        <Text>{label}</Text>
        <TextInput {...textInputConfig} />
      </View>
      <View>
        <Text>{label}</Text>
        <TextInput {...textInputConfig} />
      </View>
    </View>
  );
}

export default Input;
