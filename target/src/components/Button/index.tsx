import { Pressable, PressableProps, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { colors } from '@/theme';

type ButtonProps = PressableProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: ButtonProps) {
  return (
    <Pressable 
    style={styles.container} 
    disabled={isLoading}
    {...rest}
    >
      <Text style={styles.text}>
        {
          isLoading ? 
            <ActivityIndicator size="small" color={colors.white} /> : 
          title
        }
      </Text>
    </Pressable>
  );
}

