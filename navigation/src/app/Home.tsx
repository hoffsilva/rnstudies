import { View, ScrollView, Text } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { ButtonIcon } from '@/components/ButtonIcon';
import { BottomRoutesProps } from '@/routes/BottomRoutes';

export function Home({ navigation }: BottomRoutesProps<'Home'>) {
  // Para acessar os drawers pai, usamos useNavigation com getParent()
  const parentNavigation = useNavigation<DrawerNavigationProp<any>>();

  const openLeftDrawer = () => {
    // O drawer esquerdo é o "avô" (2 níveis acima)
    const leftDrawer = parentNavigation.getParent()?.getParent();
    leftDrawer?.dispatch(DrawerActions.openDrawer());
  };

  const openRightDrawer = () => {
    // O drawer direito é o "pai" (1 nível acima)
    const rightDrawer = parentNavigation.getParent();
    rightDrawer?.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={{ flex: 1, padding: 54 }}>
      <Header>
        {/* Botão para abrir drawer ESQUERDO (menu) */}
        <ButtonIcon name="menu" onPress={openLeftDrawer} />
        
        <Title>Home</Title>
        
        {/* Botão para abrir drawer DIREITO (notificações/carrinho) */}
        <ButtonIcon name="notifications" onPress={openRightDrawer} />
      </Header>
      
      <ScrollView>
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 16 }}>
          <Text>Product</Text>
          <ButtonIcon 
            name="add-circle" 
            onPress={() => navigation.navigate('Product', { productId: '1' })} 
          />
        </View>
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 16 }}>
          <Text>ProductProps</Text>
          <ButtonIcon 
            name="add-circle" 
            onPress={() => navigation.navigate('ProductProps', { productPropsId: '123' })} 
          />
        </View>

        {/* Instruções visuais para o usuário */}
        <View style={{ marginTop: 32, padding: 16, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Navegação:</Text>
          <Text>☰ Menu (esquerda) - Abre drawer da ESQUERDA → DIREITA</Text>
          <Text>🔔 Notificações (direita) - Abre drawer da DIREITA → ESQUERDA</Text>
        </View>
      </ScrollView>
    </View>
  );
}
