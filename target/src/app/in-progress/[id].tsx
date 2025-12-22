import { PageHeader } from '@/components/PageHeader';
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, Button } from 'react-native';
import { Progress } from '@/components/Progress';

const data = {
  current: 'R$ 580,00',
  target: 'R$ 1000,00',
  percentage: 10,
}

export default function InProgress() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader 
       title="In Progress" 
       subtitle="Create a new in progress" 
       rightButton={{
        onPress: () => {},
        icon: 'edit',
      }}
      />
      <Progress data={data} />
    </View>
  );
}