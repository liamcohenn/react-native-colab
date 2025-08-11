import { Text } from 'react-native';

type Props = { name?: string };

export default function Greeting({ name = 'Mundo' }: Props) {
  return <Text style={{ fontSize: 16 }}>¡Hola, {name}!</Text>;
}
