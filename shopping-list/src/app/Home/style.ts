import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d0d2d8',
    paddingTop: 62,
    paddingBottom: 24,
    gap: 24,
  },
  logo: {
    height: 34,
    width: 134
  },
  form: {
    width: '100%',
    gap: 7,
    paddingHorizontal: 16,
    marginTop: 42,
  },
  content: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 24,
    padding: 24,
    paddingTop: 32,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e6ec',
    paddingBottom: 12
  },
  clearButton: {
    marginLeft: 'auto'
  },
  clearButtonText: {
    color: '#828282',
    fontSize: 12,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: '#eef0f5',
    marginVertical: 16
  },
  listContent: {
    paddingBottom: 62,
    paddingTop: 24
  },
  emptyText: {
    fontSize: 14,
    textAlign: 'center',
    padding: 24
  }
});