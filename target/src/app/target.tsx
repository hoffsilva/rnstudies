import { PageHeader } from '@/components/PageHeader';
import { router } from 'expo-router';
import { View, Text, Button, StatusBar } from 'react-native';

export default function Target() {
  return (
    <View style={{ flex: 1 }}>
      <PageHeader title="Target" subtitle="Create a new target"/>
    </View>
  );
}