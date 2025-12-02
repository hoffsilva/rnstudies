import { View } from "react-native";



export function Header({ children }: { children: React.ReactNode }) {
    return (<View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      width: '100%',
      marginBottom: 54,
      }}>
        {children}
    </View>);
}