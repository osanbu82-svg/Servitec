import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function TechProfileScreen({ onSubmitProfile }) {
  const [cedula, setCedula] = useState('');
  const [photo, setPhoto] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completa tu Perfil Profesional</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Número de Cédula" 
        keyboardType="numeric" 
        value={cedula} 
        onChangeText={setCedula} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="URL de Foto de Perfil" 
        value={photo} 
        onChangeText={setPhoto} 
      />
      <TouchableOpacity style={styles.button} onPress={() => onSubmitProfile({ cedula, photo })}>
        <Text style={styles.buttonText}>Guardar y Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f6fa' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#2f3640' },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#dcdde1' },
  button: { backgroundColor: '#e84118', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});
