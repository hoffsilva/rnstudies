import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Transaction() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Transaction {id}</Text>
      <Button title="Go to Index" onPress={() => router.navigate('/')} />
    </View>
  );
}