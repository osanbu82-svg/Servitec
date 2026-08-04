import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TermsScreen from './src/screens/TermsScreen';
import LoginScreen from './src/screens/LoginScreen';
import TechProfileScreen from './src/screens/TechProfileScreen';
import ClientHome from './src/screens/ClientHome';
import { socket } from './src/services/socket';

export default function App() {
  const [step, setStep] = useState('terms'); // terms, login, tech_profile, home, service_flow
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    if (userData.role === 'tech') {
      setStep('tech_profile');
    } else {
      setStep('home');
    }
  };

  const handleTechProfile = (profileData) => {
    const fullTechData = { ...user, ...profileData };
    setUser(fullTechData);
    socket.emit('register_tech', fullTechData);
    setStep('home');
  };

  return (
    <SafeAreaView style={styles.container}>
      {step === 'terms' && <TermsScreen onAccept={() => setStep('login')} />}
      {step === 'login' && <LoginScreen onLogin={handleLogin} />}
      {step === 'tech_profile' && <TechProfileScreen onSubmitProfile={handleTechProfile} />}
      {step === 'home' && <ClientHome onSelectService={(service) => {
        socket.emit('request_service', { service, client: user.name });
        alert(`Buscando técnico para: ${service}`);
      }} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' }
});
