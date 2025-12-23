import { PageHeader } from '@/components/PageHeader';
import { router, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { Button } from '@/components/Button';
import { Progress } from '@/components/Progress';
import { TargetList } from '@/components/TargetList';
import { Transaction, TransactionProps } from '@/components/Transaction';
import { TransactionTypes } from '@/utils/TransactionTypes';

const data = {
  current: 'R$ 580,00',
  target: 'R$ 1000,00',
  percentage: 58,
}

const transactions = [
  {
    id: '1',
    value: 'R$ 100,00',
    date: '2025-01-01',
    description: 'Transaction 1',
    type: TransactionTypes.Input,
  },
  {
    id: '2',
    value: 'R$ 50,00',
    date: '2025-01-02',
    description: 'Transaction 2',
    type: TransactionTypes.Output,
  },
  {
    id: '3',
    value: 'R$ -100,00',
    date: '2025-01-03',
    description: 'Transaction 3',
    type: TransactionTypes.Output,
  },
  {
    id: '4',
    value: 'R$ 200,00',
    date: '2025-01-04',
    description: 'Transaction 4',
    type: TransactionTypes.Input,
  },
  {
    id: '5',
    value: 'R$ -100,00',
    date: '2025-01-05',
    description: 'Transaction 5',
    type: TransactionTypes.Output,
  },
]

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
      <TargetList
        data={transactions}
        renderItem={({ item }) => (
          <Transaction 
            data={item} 
            onRemove={() => {}} 
          />
        )}
        keyExtractor={(item) => item.id}
        title="Transactions"
        emptyText="You don't have any transactions yet. Create your first transaction to get started."
        contentContainerStyle={{ gap: 16 }}
      />
      <Button title="Add Transaction" onPress={() => router.navigate('/transaction/${params.id}')} />
    </View>
  );
}