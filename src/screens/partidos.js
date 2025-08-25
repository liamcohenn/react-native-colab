import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import ProximoPartido from '../components/proximoPartido';

export default function PartidosScreen({ navigation }) {
    const partidos = [
        { id: 1, local: 'Miami Heat', visitante: 'Boston Celtics', fecha: '20/10', hora: '19:00' },
        { id: 2, local: 'Denver Nuggets', visitante: 'Dallas Mavericks', fecha: '21/10', hora: '20:30' },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>📅 Próximos Juegos NBA</Text>
            {partidos.map((p) => (
                <ProximoPartido key={p.id} partido={p} />
            ))}

            <View style={styles.botones}>
                <Button title="Ir a Tablas" onPress={() => navigation.navigate('Tablas')} />
                <Button title="Ir a Favoritos" onPress={() => navigation.navigate('Favoritos')} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 12, color: '#C8102E' },
    botones: { marginTop: 20, gap: 10 },
});
