import { DrawerScreenProps, createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import { Home } from '@/app/Home';
import { ProductProps } from '@/app/ProductProps';
import { Product } from '@/app/Product';


export type DrawerRoutesList = {
  Home: undefined;
  ProductProps: { productPropsId?: string };
  Product: { productId?: string };
};

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> = DrawerScreenProps<DrawerRoutesList, T>;

const Drawer = createDrawerNavigator<DrawerRoutesList>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={
      {
        drawerPosition: 'right',
        drawerActiveBackgroundColor: 'blue',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'gray',
        drawerStyle: {
          backgroundColor: 'white',
        },
        
      }}
    >
      <Drawer.Screen name="Home" component={Home} options={{ 
        drawerIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
        drawerLabel: 'Home',
      }} />
      <Drawer.Screen name="ProductProps" component={ProductProps} options={{ 
        drawerIcon: ({ color, size }) => <MaterialIcons name="settings" color={color} size={size} />,
        drawerLabel: 'ProductProps',
      }} />
      <Drawer.Screen name="Product" component={Product} options={{ 
        drawerIcon: ({ color, size }) => <MaterialIcons name="shopping-cart" color={color} size={size} />,
        drawerLabel: 'Product',
      }} />
    </Drawer.Navigator>
  );
}