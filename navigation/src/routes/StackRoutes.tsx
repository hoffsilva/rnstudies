import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { Home } from '@/app/Home';
import { Product } from '@/app/Product';
import { ProductProps } from '@/app/ProductProps';

export type StackRoutesList = {
  Home: undefined;
  ProductProps: { productPropsId: string };
  Product: { productId: string };
};

export type StackRoutesProps<T extends keyof StackRoutesList> = NativeStackScreenProps<StackRoutesList, T>;

const Stack = createNativeStackNavigator<StackRoutesList>();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductProps" component={ProductProps} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}