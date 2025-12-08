import { View, Text, Pressable, PressableProps } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/theme';

export type TargetItemProps = {
  id?: string;
  name: string;
  percentage: string;
  current: string;
  target: string;
}

type Props = PressableProps & {
  data: TargetItemProps;
}

export function TargetItem({ data, ...rest }: Props) {
  return (
    <Pressable style={styles.container} {...rest}>
      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.status}>{data.percentage} ◉ {data.current} / {data.target}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color={colors.gray[300]} />
    </Pressable>
  );
}