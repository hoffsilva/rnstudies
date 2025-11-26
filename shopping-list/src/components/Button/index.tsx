import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type ButtonProps = PressableProps & {
  title: string;
};

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <Pressable 
    style = {styles.container} 
    {...rest}
    >
      <Text style = {styles.title}>{title}</Text>
    </Pressable>
  );
}