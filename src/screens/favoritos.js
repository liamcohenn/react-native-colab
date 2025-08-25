import React from 'react';
import { ScrollView, Text, StyleSheet, Button, View } from 'react-native';
import EquipoFavorito from '../components/equipoFavorito';

export default function FavoritosScreen({ navigation }) {
    const equiposFavoritos = [
        {
            id: 1,
            nombre: 'Los Angeles Lakers',
            ultimo: { local: 'Lakers', visitante: 'Celtics', resultado: '112-108' },
            proximo: { local: 'Lakers', visitante: 'Warriors', fecha: '22/10', hora: '21:30' },
        },
        {
            id: 2,
            nombre: 'Golden State Warriors',
            ultimo: { local: 'Warriors', visitante: 'Suns', resultado: '118-115' },
            proximo: { local: 'Warriors', visitante: 'Clippers', fecha: '24/10', hora: '22:00' },
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>⭐ Equipos Favoritos NBA</Text>
            {equiposFavoritos.map((eq) => (
                <EquipoFavorito key={eq.id} equipo={eq} />
            ))}

            <View style={styles.botones}>
                <Button title="Ir a Juegos" onPress={() => navigation.navigate('Partidos')} />
                <Button title="Ir a Tablas" onPress={() => navigation.navigate('Tablas')} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 12, color: '#1D428A' },
    botones: { marginTop: 20, gap: 10 },
});
