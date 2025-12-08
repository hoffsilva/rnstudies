import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  header: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  label: {
    fontFamily: fontFamily.regular,
    fontSize: 10,
    color: colors.blue[300],
  },
  value: {
    fontFamily: fontFamily.regular,
    fontSize: 18,
    color: colors.white,
  },
  left: {
    justifyContent: 'flex-end',
  },
  right: {
    justifyContent: 'flex-start',
  }
});