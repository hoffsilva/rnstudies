import { FilterStatus } from '@/types/FilterStatus';
import { BadgeCheck, Badge } from 'lucide-react-native';


type StatusIconProps = {
  status: FilterStatus;
};

export default function StatusIcon({ status }: StatusIconProps) {
  return status === FilterStatus.PENDING ? (
     <Badge size={16} color="#000" /> 
    ) : ( 
      <BadgeCheck size={16} color="#2c46b1" />
    )
}