import { 
  FlatList, 
  FlatListProps,
  StyleProp,
  ViewStyle,
  Text,
  View
} from 'react-native';

import { styles } from './styles';
import { colors } from '@/theme';
import { TargetItem, TargetItemProps } from '../TargetItem';
import { Separator } from '../Separator';

type Props<T> = FlatListProps<T> & {
  title: string;
  emptyText: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export function TargetList<T>({ data, renderItem, title, emptyText, contentContainerStyle, ...rest }: Props<T>) {
  return (
    <View style={[styles.container, contentContainerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
      data={data} 
      renderItem={renderItem} 
      ItemSeparatorComponent={() => <Separator color={colors.gray[200]} />}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => <Text style={styles.empty}>{emptyText}</Text>}
      {...rest} 
      />
    </View>
  );
}