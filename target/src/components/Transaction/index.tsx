import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/theme';
import { TransactionTypes } from '@/utils/TransactionTypes';

export type TransactionProps = {
  id: string
  value: string;
  description: string;
  type: TransactionTypes;
  date: string;
}

type TransactionProps = {
  data: Transaction;
}

export function Transaction({ data }: TransactionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transaction</Text>
    </View>
  );
}