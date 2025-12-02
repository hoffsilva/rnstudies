import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@/app/Home';
import { Product } from '@/app/Product';

export const StackRoutes = createNativeStackNavigator({
  screens: {
    Home: Home,
    Product: Product,
  },
});