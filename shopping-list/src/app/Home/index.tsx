import { View, Image, Pressable, Text, FlatList, Alert } from "react-native"
import { useState, useEffect } from "react";
import { styles } from "./style";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Filter from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import Item, { ItemType } from "@/components/Item";
import { itemsStorage, ItemStorage } from "@/storage/ItemsStorage";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.PURCHASED];

export default function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [description, setDescription] = useState('');
  const [items, setItems] = useState<ItemStorage[]>([]);
  

  function handleAddItem() {
    if (!description.trim()) {
      return Alert.alert('Error', 'Description is required');
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING
    };

    setItems([...items, newItem]);
    itemsStorage.saveItems([...items, newItem]);

    Alert.alert('Success', `Item added successfully: ${description}`);
    setDescription('');
    setFilter(FilterStatus.PENDING);
  }

  function handleDeleteItem(id: string) {
    itemsStorage.deleteItem(id);
    setItems(items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: string) {
    itemsStorage.toggleStatus(id);
    Alert.alert('Success', `Item toggled successfully: ${items.find((item) => item.id === id)?.description}`);
  }

  function handleClearItems() {
    Alert.alert('Warning', 'Are you sure you want to clear all items?', [
      { text: 'Cancel', style: 'destructive' },
      { text: 'Clear', onPress: () => {
        itemsStorage.clearItems();
        setItems([]);
        setFilter(FilterStatus.PENDING);
        Alert.alert('Success', 'All items cleared successfully');
      } }
    ]);
  }


  useEffect(() => {
    itemsStorage.getItemByStatus(filter).then((items) => {
      setItems(items);
    });
  }, [filter]);


  return (
    <View style = {styles.container}>
      <Image source = {require('@/assets/logo.png')} style = {styles.logo} />
      <View style = {styles.form}>
        <Input 
          placeholder = "Wat do you want to buy?" 
          onChangeText = {setDescription}
          value = {description}
        />
        <Button title = "Add Item" onPress = {handleAddItem} />
      </View>
      <View style = {styles.content}>
        <View style = {styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter 
              key = {status} 
              status = {status} 
              isActive = {status === filter} 
              onPress = {() => setFilter(status)} 
              />
            ))
          }
          <Pressable 
            style = {styles.clearButton}
            onPress = {handleClearItems}
          >
            <Text style = {styles.clearButtonText}>Clear All</Text>
          </Pressable>
        </View>
        <FlatList
          showsVerticalScrollIndicator = {false}
          ItemSeparatorComponent = {() => <View style = {styles.separator} />}
          contentContainerStyle = {styles.listContent}
          ListEmptyComponent = {() => <Text style = {styles.emptyText}>No items found</Text>}
          data = {items}
          renderItem = { ({ item }) => 
              <Item 
                item = {item} 
                onDelete = {() => {handleDeleteItem(item.id)}} 
                onToggle = {() => {handleToggleItem(item.id)}} 
              />
          }
          keyExtractor = {item => item.id.toString()}
        />
      </View>
    </View>
  )
}