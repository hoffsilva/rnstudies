import { ColorValue, Pressable, PressableProps, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { colors } from '@/theme';

type OptionProps = PressableProps & {
  isSelected: boolean;
  icon: keyof typeof MaterialIcons.glyphMap;
  color: ColorValue;
  title: string;
}

export function Option({ isSelected, icon, color, title, ...rest }: OptionProps) {
  return (
    <Pressable style={[styles.option, isSelected && { backgroundColor: color }]} {...rest}>
      <MaterialIcons name={icon} size={20} color={isSelected ? colors.white : colors.gray[500]} />
      <Text style={[styles.label, isSelected && { color: colors.white }]}>{title}</Text>
    </Pressable>
  );
}