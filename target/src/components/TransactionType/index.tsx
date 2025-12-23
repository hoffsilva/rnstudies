import { View } from 'react-native';
import { styles } from './styles';
import { TransactionTypes } from '@/utils/TransactionTypes';
import { colors } from '@/theme';
import { Option } from './option';

type TransactionTypeProps = {
  selectedType: TransactionTypes
  onChangeType: (type: TransactionTypes) => void
}

export function TransactionType({ selectedType, onChangeType }: TransactionTypeProps) {
  const options = [
    {
      icon: 'arrow-upward',
      color: colors.green[500],
      title: 'Input',
    },
    {
      icon: 'arrow-downward',
      color: colors.red[400],
      title: 'Output',
    },
  ]
  return (
    <View style={styles.container}>
      <Option 
        isSelected={selectedType === TransactionTypes.Input} 
        icon="arrow-upward" 
        color={colors.green[400]} 
        title="Input" 
        onPress={() => onChangeType(TransactionTypes.Input)} 
      />
       <Option 
        isSelected={selectedType === TransactionTypes.Output} 
        icon="arrow-downward" 
        color={colors.red[400]} 
        title="Output" 
        onPress={() => onChangeType(TransactionTypes.Output)} 
      />
    </View>
  );
}