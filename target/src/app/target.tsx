import { PageHeader } from '@/components/PageHeader';
import { View, Text, StatusBar } from 'react-native';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { CurrencyInput } from '@/components/CurrencyInput';

export default function Target() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader 
      title="Target" 
      subtitle="Create a new target"
      />
      <View style={{ gap: 24, marginTop: 32 }}>
        <Input label="Target name" />
        <CurrencyInput label="Target value" value={254854.54} />
        <Button title="Save target" isLoading={true} />

      </View>
    </View>
  );
}