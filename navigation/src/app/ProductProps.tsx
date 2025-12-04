import { View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { ButtonIcon } from '@/components/ButtonIcon';
import { BottomRoutesProps } from '@/routes/BottomRoutes';

export function ProductProps({ navigation, route }: BottomRoutesProps<'ProductProps'>) {
  const parentNavigation = useNavigation<DrawerNavigationProp<any>>();

  const openLeftDrawer = () => {
    const leftDrawer = parentNavigation.getParent()?.getParent();
    leftDrawer?.dispatch(DrawerActions.openDrawer());
  };

  const openRightDrawer = () => {
    const rightDrawer = parentNavigation.getParent();
    rightDrawer?.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={{ flex: 1, padding: 54 }}>
      <Header>
        <ButtonIcon name="menu" onPress={openLeftDrawer} />
        <Title>ProductProps {route.params?.productPropsId}</Title>
        <ButtonIcon name="notifications" onPress={openRightDrawer} />
      </Header>
    </View>
  );
}
