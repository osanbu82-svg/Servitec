import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function TermsScreen({ onAccept }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Términos y Condiciones - TecniPro</Text>
      <ScrollView style={styles.box}>
        <Text style={styles.text}>
          1. Aceptación de políticas de servicio bajo demanda.{'\n'}
          2. Responsabilidad sobre costos de visita y cotizaciones.{'\n'}
          3. Bloqueo de cuenta por acumulación de deudas en efectivo.{'\n'}
          4. Protección de datos personales y verificación de antecedentes de técnicos.
        </Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={onAccept}>
        <Text style={styles.buttonText}>Aceptar y Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f6fa' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, textAlign: 'center', color: '#2f3640' },
  box: { backgroundColor: '#fff', padding: 15, borderRadius: 8, maxHeight: 300, marginBottom: 20 },
  text: { fontSize: 14, color: '#57606f', lineHeight: 22 },
  button: { backgroundColor: '#e84118', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});
