import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View style={{ alignItems: 'center', gap: 8 }}>
      <Text>Contador: {count}</Text>
      <Button title="+1" onPress={() => setCount((c) => c + 1)} />
      <Button title="-1" onPress={() => setCount((c) => c - 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
}
