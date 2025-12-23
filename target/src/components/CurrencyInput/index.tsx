import { View, Text } from 'react-native';
import Input, { CurrencyInputProps as RNCurrencyInputProps } from 'react-native-currency-input';
import { styles } from './styles';
import { colors } from '@/theme';

type CurrencyInputProps = RNCurrencyInputProps & {
  label: string;
};

export function CurrencyInput({ label, ...rest }: CurrencyInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input 
        style={styles.input} 
        placeholderTextColor={colors.gray[400]}
        delimiter=","
        separator="."
        precision={2}
        minValue={0}
        maxValue={1000000}
        onChangeText={(value) => console.log(value)}
        {...rest} 
      />
    </View>
  );
}