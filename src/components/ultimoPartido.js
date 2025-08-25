import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * partido = {
 *   local: 'Los Angeles Lakers',
 *   visitante: 'Boston Celtics',
 *   resultado: '112 - 108'
 * }
 */
export default function UltimoPartido({ partido }) {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>
        {partido.local} {partido.resultado} {partido.visitante}
      </Text>
      <Text style={styles.sub}>Final • Temporada Regular</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#E8F5FF',
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#CFE6FF',
  },
  texto: { fontSize: 16, fontWeight: '700', color: '#1D428A' },
  sub: { fontSize: 12, color: '#666', marginTop: 2 },
});
