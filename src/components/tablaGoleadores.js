import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TablaGoleadores() {
  // Top anotadores (ejemplo)
  const anotadores = [
    { jugador: 'Luka Dončić', equipo: 'DAL', ppg: 33.2 },
    { jugador: 'Joel Embiid', equipo: 'PHI', ppg: 32.6 },
    { jugador: 'Shai Gilgeous-Alexander', equipo: 'OKC', ppg: 31.8 },
  ];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Top Scorers (PPG)</Text>
      <View style={styles.tabla}>
        {anotadores.map((g, i) => (
          <Text key={i} style={styles.texto}>
            {i + 1}. {g.jugador} ({g.equipo}) — {g.ppg} PPG
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: '100%' },
  title: { fontSize: 16, fontWeight: '800', marginBottom: 6, color: '#1D428A' },
  tabla: {
    padding: 10,
    backgroundColor: '#F3F7FF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDE8FF',
  },
  texto: { fontSize: 14, marginBottom: 4, color: '#222' },
});

