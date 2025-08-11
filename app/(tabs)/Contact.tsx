import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

export default function ContactScreen() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const onSubmit = () => {
    if (!nombre || !mensaje) return Alert.alert('Error', 'Completá nombre y mensaje.');
    Alert.alert('¡Enviado!', `Gracias ${nombre}, recibimos tu mensaje.`);
    setNombre('');
    setMensaje('');
  };

  return (
    <View style={{ flex: 1, gap: 12, padding: 24 }}>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>Contacto</Text>
      <Text>Nombre</Text>
      <TextInput
        placeholder="Tu nombre"
        value={nombre}
        onChangeText={setNombre}
        style={{ borderWidth: 1, padding: 8, borderRadius: 8 }}
      />
      <Text>Mensaje</Text>
      <TextInput
        placeholder="Tu mensaje"
        value={mensaje}
        onChangeText={setMensaje}
        multiline
        style={{ borderWidth: 1, padding: 8, borderRadius: 8, minHeight: 80 }}
      />
      <Button title="Enviar" onPress={onSubmit} />
    </View>
  );
}
