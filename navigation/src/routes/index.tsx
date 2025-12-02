import { createStaticNavigation } from '@react-navigation/native';
import { StackRoutes } from './StackRoutes';

const Navigation = createStaticNavigation(StackRoutes);

export function Routes() {
  return <Navigation />;
}