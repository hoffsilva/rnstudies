import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/theme';


export const styles = StyleSheet.create({
  container: {
    height: 42,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.gray[100],
    borderRadius: 8,
    overflow: 'hidden',
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    flexDirection: 'row',
    borderRadius: 8,
    gap: 8,
  },
  selected: {
    backgroundColor: colors.blue[500],
  },
  label: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
  },
  icon: {},
});