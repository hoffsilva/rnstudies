import { CurrencyInput } from '@/components/CurrencyInput';
import { Input } from '@/components/Input';
import { PageHeader } from '@/components/PageHeader';
import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { Button } from '@/components/Button';
import { TransactionType } from '@/components/TransactionType';
import { TransactionTypes } from '@/utils/TransactionTypes';
import { useState } from 'react';

export default function Transaction() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedType, setSelectedType] = useState<TransactionTypes>(TransactionTypes.Input);
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader title="NewTransaction" subtitle="Create a new transaction" />
      <View style={{ gap: 24, marginTop: 32, marginBottom: 32 }}>
        <TransactionType selectedType={selectedType} onChangeType={setSelectedType} />
        <CurrencyInput label="Transaction value" value={254854.54} />
        <Input label="Transaction description" placeholder="Transaction description" />
      </View>
      <Button title="Save transaction" onPress={() => {}} />
    </View>
  );
}