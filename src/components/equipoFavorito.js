import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UltimoPartido from './ultimoPartido';
import ProximoPartido from './proximoPartido';

/**
 * equipo = {
 *   nombre: 'Los Angeles Lakers',
 *   ultimo: { local, visitante, resultado },
 *   proximo: { local, visitante, fecha, hora, estadio? }
 * }
 */
export default function EquipoFavorito({ equipo }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>⭐ {equipo.nombre}</Text>

      <Text style={styles.subtitulo}>Último Juego</Text>
      <UltimoPartido partido={equipo.ultimo} />

      <Text style={styles.subtitulo}>Próximo Juego</Text>
      <ProximoPartido partido={equipo.proximo} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  nombre: { fontSize: 20, fontWeight: '800', marginBottom: 8, color: '#1D428A' },
  subtitulo: { fontSize: 16, fontWeight: '700', marginVertical: 6, color: '#C8102E' },
});
