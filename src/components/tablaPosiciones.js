import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TablaPosiciones() {
  // Ejemplo: top 5 conferencia Oeste
  const posiciones = [
    { equipo: 'Denver Nuggets', w: 58, l: 24 },
    { equipo: 'Oklahoma City Thunder', w: 56, l: 26 },
    { equipo: 'Minnesota Timberwolves', w: 56, l: 26 },
    { equipo: 'Los Angeles Clippers', w: 54, l: 28 },
    { equipo: 'Dallas Mavericks', w: 50, l: 32 },
  ];

  const pct = (w, l) => ((w / (w + l)) || 0).toFixed(3);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Western Conference — Standings</Text>
      <View style={styles.tabla}>
        {posiciones.map((p, i) => (
          <Text key={i} style={styles.texto}>
            {i + 1}. {p.equipo} — {p.w}-{p.l} (.{pct(p.w, p.l).split('.')[1]})
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
    backgroundColor: '#FFF5F6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD6DB',
  },
  texto: { fontSize: 14, marginBottom: 4, color: '#222' },
});
