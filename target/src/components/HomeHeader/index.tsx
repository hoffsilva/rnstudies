import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/theme';
import { View, Text } from 'react-native';
import { Separator } from '@/components/Separator';
import { Summary, type SummaryProps } from '../Summary';

export type HomeHeaderProps = {
  total: string;
  input: SummaryProps;
  output: SummaryProps;
}

type Props = {
  data: HomeHeaderProps;

}

export default function HomeHeader({ data }: Props) {
  return (
    <LinearGradient
      colors={[colors.blue[800], colors.blue[500]]}
      style={styles.container}
    >
      <View >
        <Text style={styles.label}>Total Balance</Text>
        <Text style={styles.total} >{data.total}</Text>
      </View>
      <Separator color={colors.blue[400]} />
      <View style={styles.summaryContainer}>
        <Summary data={data.input} icon={{ name: 'arrow-upward', color: colors.green[500] }}/>
        <Summary data={data.output} icon={{ name: 'arrow-downward', color: colors.red[400] }} isLeft={true} />
      </View>
    </LinearGradient>
  )
}