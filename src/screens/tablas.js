import React from 'react';
import { ScrollView, Text, StyleSheet, Button, View } from 'react-native';
import TablaPosiciones from '../components/tablaPosiciones';
import TablaGoleadores from '../components/tablaGoleadores';

export default function TablasScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>📊 Standings NBA</Text>
            <TablaPosiciones />

            <Text style={styles.titulo}>🏀 Top Scorers (PPG)</Text>
            <TablaGoleadores />

            <View style={styles.botones}>
                <Button title="Ir a Juegos" onPress={() => navigation.navigate('Partidos')} />
                <Button title="Ir a Favoritos" onPress={() => navigation.navigate('Favoritos')} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    titulo: { fontSize: 22, fontWeight: 'bold', marginVertical: 12, color: '#1D428A' },
    botones: { marginTop: 20, gap: 10 },
});
