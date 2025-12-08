import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function InProgress() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <Text style={{ textAlign: 'center' }}>InProgress {id}</Text>
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}