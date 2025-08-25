import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Greeting({ nombre = 'Fan NBA' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏀 ¡Bienvenido, {nombre}!</Text>
      <Text style={styles.subtitle}>Stats, fixtures y standings de la NBA en tu app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingVertical: 12, paddingHorizontal: 16 },
  title: { fontSize: 20, fontWeight: '800', color: '#1D428A', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#323232', opacity: 0.9, textAlign: 'center' },
});
