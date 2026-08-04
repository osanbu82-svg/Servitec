import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const categories = [
  'Electricidad', 'Plomería', 'Cerrajería', 'Electrónica', 
  'Computadores', 'Televisores', 'Carros', 'Motos', 'Lavadoras', 'Neveras', 'Estufas'
];

export default function ClientHome({ onSelectService }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué servicio técnico necesitas?</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => onSelectService(item)}>
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f6fa', paddingTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#2f3640' },
  card: { flex: 1, backgroundColor: '#fff', margin: 8, padding: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center', elevation: 2 },
  cardText: { fontWeight: 'bold', color: '#2f3640', fontSize: 16 }
});
