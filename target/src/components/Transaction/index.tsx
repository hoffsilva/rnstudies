import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/theme';
import { TransactionTypes } from '@/utils/TransactionTypes';

export type TransactionProps = {
  id: string
  value: string
  description: string
  date: string
  type: TransactionTypes
}

type Props = {
  data: TransactionProps
  onRemove: () => void
}

export function Transaction({ data, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <MaterialIcons name={data.type === TransactionTypes.Input ? 'arrow-upward' : 'arrow-downward'} size={20} color={data.type === TransactionTypes.Input ? colors.green[500] : colors.red[400]} />
      <View style={styles.info}>
        <Text style={styles.value}>{data.value}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {data.date}
          {' ◉ '}
          {data.description}
        </Text>
      </View>
      <Pressable onPress={onRemove}>
        <MaterialIcons name="delete-outline" size={20} color={colors.gray[500]} />
      </Pressable>
    </View>
  );
}