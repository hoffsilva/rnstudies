import { Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = PressableProps & {
    name: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ name, children, ...props }: ButtonIconProps) {
    return <Pressable {...props} >
      <MaterialIcons name={name} size={32} />
    </Pressable>;
}