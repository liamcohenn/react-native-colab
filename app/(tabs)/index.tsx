import { Text, View } from 'react-native';
import Counter from '../../components/Counter';
import Greeting from '../../components/Greeting';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, gap: 16, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <Text style={{ fontSize: 20 }}>Home</Text>
      <Greeting name="Equipo RN" />
      <Counter />
    </View>
  );
}