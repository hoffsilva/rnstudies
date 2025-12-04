export type RootStackParamList = {
  Home: undefined;
  Product: undefined;
  ProductProps: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}