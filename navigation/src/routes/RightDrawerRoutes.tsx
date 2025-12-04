import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { BottomRoutes } from './BottomRoutes';

export type RightDrawerRoutesList = {
  TabContent: undefined;
  Notifications: undefined;
  Cart: undefined;
};

export type RightDrawerRoutesProps<T extends keyof RightDrawerRoutesList> = DrawerScreenProps<RightDrawerRoutesList, T>;

const RightDrawer = createDrawerNavigator<RightDrawerRoutesList>();

// Telas que aparecem no drawer direito (ações rápidas, notificações, etc.)
function NotificationsScreen() {
  return null; // Substitua por sua tela de Notificações
}

function CartScreen() {
  return null; // Substitua por sua tela de Carrinho
}

export function RightDrawerRoutes() {
  return (
    <RightDrawer.Navigator
      screenOptions={{
        drawerPosition: 'right', // Abre da direita para a esquerda
        headerShown: false,
        drawerActiveBackgroundColor: '#E74C3C',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#333',
        drawerStyle: {
          backgroundColor: '#fff',
          width: 260,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
      }}
    >
      <RightDrawer.Screen
        name="TabContent"
        component={BottomRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" color={color} size={size} />
          ),
          drawerLabel: 'Dashboard',
        }}
      />
      <RightDrawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="notifications" color={color} size={size} />
          ),
          drawerLabel: 'Notificações',
        }}
      />
      <RightDrawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" color={color} size={size} />
          ),
          drawerLabel: 'Carrinho',
        }}
      />
    </RightDrawer.Navigator>
  );
}

