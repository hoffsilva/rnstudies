import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { RightDrawerRoutes } from './RightDrawerRoutes';

export type LeftDrawerRoutesList = {
  MainContent: undefined;
  Settings: undefined;
  Profile: undefined;
};

export type LeftDrawerRoutesProps<T extends keyof LeftDrawerRoutesList> = DrawerScreenProps<LeftDrawerRoutesList, T>;

const LeftDrawer = createDrawerNavigator<LeftDrawerRoutesList>();

// Telas que aparecem no drawer esquerdo (menu principal)
function SettingsScreen() {
  return null; // Substitua por sua tela de Settings
}

function ProfileScreen() {
  return null; // Substitua por sua tela de Profile
}

export function LeftDrawerRoutes() {
  return (
    <LeftDrawer.Navigator
      screenOptions={{
        drawerPosition: 'left', // Abre da esquerda para a direita
        headerShown: false,
        drawerActiveBackgroundColor: '#4A90D9',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#333',
        drawerStyle: {
          backgroundColor: '#f5f5f5',
          width: 280,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
      }}
    >
      <LeftDrawer.Screen
        name="MainContent"
        component={RightDrawerRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
          drawerLabel: 'Início',
        }}
      />
      <LeftDrawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
          drawerLabel: 'Configurações',
        }}
      />
      <LeftDrawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
          drawerLabel: 'Perfil',
        }}
      />
    </LeftDrawer.Navigator>
  );
}

