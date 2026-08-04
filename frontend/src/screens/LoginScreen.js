import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ onLogin }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('client'); // 'client' o 'tech'

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TecniPro</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Nombre completo" 
        value={name} 
        onChangeText={setName} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Teléfono" 
        keyboardType="phone-pad" 
        value={phone} 
        onChangeText={setPhone} 
      />
      <View style={styles.roleContainer}>
        <TouchableOpacity 
          style={[styles.roleBtn, role === 'client' && styles.activeRole]} 
          onPress={() => setRole('client')}
        >
          <Text style={styles.roleText}>Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.roleBtn, role === 'tech' && styles.activeRole]} 
          onPress={() => setRole('tech')}
        >
          <Text style={styles.roleText}>Técnico</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onLogin({ name, phone, role })}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f6fa' },
  logo: { fontSize: 32, fontWeight: 'bold', color: '#e84118', textAlign: 'center', marginBottom: 30 },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#dcdde1' },
  roleContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  roleBtn: { flex: 1, padding: 12, backgroundColor: '#dcdde1', alignItems: 'center', borderRadius: 8, marginHorizontal: 5 },
  activeRole: { backgroundColor: '#2f3640' },
  roleText: { color: '#fff', fontWeight: 'bold' },
  button: { backgroundColor: '#e84118', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});
