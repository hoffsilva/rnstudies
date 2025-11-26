import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/types/FilterStatus";

const ITEMS_STORAGE_KEY = '@shoppinglist:items';

export type ItemStorage = {
  id: string;
  description: string;
  status: FilterStatus;
}

async function getItems(): Promise<ItemStorage[]> {
  try {
    const items = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);
    return items ? JSON.parse(items) : [];
  } catch (error) {
    throw error;
  }
}

async function getItemByStatus(status: FilterStatus): Promise<ItemStorage[]> {
  const items = await getItems();
  return items.filter((item: ItemStorage) => item.status === status);
}

async function saveItems(items: ItemStorage[]): Promise<void> {
  const itemsStorage = await getItems();
  itemsStorage.push(...items);
  await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(itemsStorage));
}

async function saveItem(item: ItemStorage): Promise<void> {
  const items = await getItems();
  items.push(item);
  await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
}

async function deleteItem(id: string): Promise<void> {
  const items = await getItems();
  await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items.filter((item: ItemStorage) => item.id !== id)));
}

async function toggleStatus(id: string): Promise<void> {
  const items = await getItems();
  const item = items.find((item: ItemStorage) => item.id === id);
  if (item) {
    item.status = item.status === FilterStatus.PENDING ? FilterStatus.PURCHASED : FilterStatus.PENDING;
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
  }
  await saveItems(items);
}

async function clearItems(): Promise<void> {
  await AsyncStorage.removeItem(ITEMS_STORAGE_KEY);
}

export const itemsStorage = {
  getItems,
  getItemByStatus,
  saveItems,
  saveItem,
  deleteItem,
  toggleStatus,
  clearItems
}