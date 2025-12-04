import { NavigationContainer } from '@react-navigation/native';
import { LeftDrawerRoutes } from './LeftDrawerRoutes';

export function Routes() {
  return (
    <NavigationContainer>
      <LeftDrawerRoutes />
    </NavigationContainer>
  );
}
