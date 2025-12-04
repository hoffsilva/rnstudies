import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Home } from '@/app/Home';
import { Product } from '@/app/Product';
import { ProductProps } from '@/app/ProductProps';

export type BottomRoutesList = {
  Home: undefined;
  ProductProps: { productPropsId?: string };
  Product: { productId?: string };
};

export type BottomRoutesProps<T extends keyof BottomRoutesList> = BottomTabScreenProps<BottomRoutesList, T>;

const Tab = createBottomTabNavigator<BottomRoutesList>();

export function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4A90D9',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
          borderTopWidth: 0,
          paddingTop: 10,
          paddingBottom: 10,
          height: 70,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="ProductProps"
        component={ProductProps}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
          tabBarLabel: 'Configurar',
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" color={color} size={size} />
          ),
          tabBarLabel: 'Produto',
        }}
      />
    </Tab.Navigator>
  );
}