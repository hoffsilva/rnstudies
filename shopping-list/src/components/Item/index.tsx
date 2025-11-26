import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { Trash2 } from "lucide-react-native";
import { FilterStatus } from '@/types/FilterStatus';
import StatusIcon from '../StatusIcon';

export type ItemType = {
  id: string;
  description: string;
  status: FilterStatus;
}

type ItemProps = {
  item: ItemType;
  onDelete: () => void;
  onToggle: () => void;
};

export default function Item({ item, onDelete, onToggle }: ItemProps) {
  return (
    <View style = {styles.container}>
      <Pressable onPress = {onToggle}>
        <StatusIcon status = {item.status} />
      </Pressable>
      <Text style = {styles.description}>{item.description}</Text>
      <Pressable onPress = {onDelete}>
        <Trash2 size = {16} color = "#828282" />
      </Pressable>
    </View>
  );
}