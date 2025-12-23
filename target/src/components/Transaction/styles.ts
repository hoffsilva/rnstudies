import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
    gap: 12,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  value: {
    fontSize: 16,
    fontFamily: fontFamily.medium,
    color: colors.black,
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  }
});