import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors } from '@/theme';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  rightButton?: {
    onPress: () => void;
    icon: keyof typeof MaterialIcons.glyphMap;
  }
};

export function PageHeader({ title, subtitle, rightButton }: PageHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Pressable onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color={colors.black} />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        {rightButton && (
          <Pressable onPress={rightButton.onPress}>
            <MaterialIcons name={rightButton.icon} size={24} color={colors.black} />
          </Pressable>
        )}
      </View>
    </View>
  );
}