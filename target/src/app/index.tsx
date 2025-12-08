import { View, StatusBar } from 'react-native';
import HomeHeader from '@/components/HomeHeader';
import { TargetItem } from '@/components/TargetItem';
import { TargetList } from '@/components/TargetList';
import { Button } from '@/components/Button';
import { router } from 'expo-router';
import { colors } from '@/theme';

const summary = {
  total: 'R$ 100,00',
  input: {
    label: 'Income',
    value: 'R$ 100,00',
  },
  output: {
    label: 'Expenses',
    value: 'R$ 100,00',
  },
}

const targetList = [
  {
    id: '1',
    name: 'Target 1',
    percentage: '10%',
    current: 'R$ 100,00',
    target: 'R$ 1000,00',
  },
  {
    id: '2',
    name: 'Target 2',
    percentage: '20%',
    current: 'R$ 200,00',
    target: 'R$ 2000,00',
  },
  {
    id: '3',
    name: 'Target 3',
    percentage: '30%',
    current: 'R$ 300,00',
    target: 'R$ 3000,00',
  },
]

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content"/>
      <HomeHeader data={summary} />
      <TargetList 
      data={targetList} 
      renderItem={({ item }) => 
        (<TargetItem 
          data={item} 
          onPress={() => router.navigate(`/in-progress/${item.id}`)} 
          />
        )
      }
      keyExtractor={(item) => item.id}
      title="Targets" 
      emptyText="You don't have any targets yet. Create your first target to get started." 
      contentContainerStyle={{ paddingHorizontal: 24 }}
      />
      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button title="Create Target" onPress={() => router.navigate('/target')} />
      </View>
    </View>
  );
}