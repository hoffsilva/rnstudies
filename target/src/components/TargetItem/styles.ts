import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    height: 64,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    paddingBottom: 16,
  },
  content: {
    flex: 1,
    gap: 8,
  },
  name: {
    fontSize: 16,
    fontFamily: fontFamily.medium,
    color: colors.black,
  },
  status: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  }
});