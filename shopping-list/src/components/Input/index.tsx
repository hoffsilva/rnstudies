import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

export default function Button({...rest }: TextInputProps) {
  return (
    <TextInput 
    style = {styles.container} 
    placeholderTextColor = "#828282"
    {...rest} 
    />
  );
}