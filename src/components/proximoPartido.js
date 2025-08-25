import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * partido = {
 *   local: 'Golden State Warriors',
 *   visitante: 'Phoenix Suns',
 *   fecha: '2025-10-22',
 *   hora: '21:30',
 *   estadio?: 'Chase Center'
 * }
 */
export default function ProximoPartido({ partido }) {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>
        {partido.local} 🆚 {partido.visitante}
      </Text>
      <Text style={styles.subTexto}>
        📅 {partido.fecha}   ⏰ {partido.hora}
      </Text>
      {partido.estadio ? <Text style={styles.venue}>📍 {partido.estadio}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#FFF7F7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD9DC',
  },
  texto: { fontSize: 18, fontWeight: 'bold', color: '#C8102E' },
  subTexto: { fontSize: 14, color: '#555', marginTop: 2 },
  venue: { fontSize: 13, color: '#666', marginTop: 2 },
});
