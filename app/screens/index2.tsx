import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

export default function HomeScreen() {
  const navigateToProfile = () => {
    router.push('/(tabs)/perfil');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bem-vindo ao ReUse!</Text>
        <Text style={styles.subText}>Compartilhe e encontre itens para reutilização</Text>
        
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton]}
          onPress={() => router.push('/suas-publicacoes')}
        >
          <Text style={styles.buttonText}>Suas Publicações</Text>
          <Ionicons name="documents-outline" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/product-details')}
        >
          <Text style={styles.buttonText}>Ver Detalhes do Produto</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={navigateToProfile}
        >
          <Text style={styles.buttonText}>Ver Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/proposta-recebida')}
        >
          <Text style={styles.buttonText}>Ver Proposta Recebida</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/detalhes-produto')}
        >
          <Text style={styles.buttonText}>Ver Nova Tela de Produto</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/avaliacao')}
        >
          <Text style={styles.buttonText}>Fazer Avaliação</Text>
        </TouchableOpacity>

        <View style={styles.authButtons}>
          <TouchableOpacity 
            style={[styles.button, styles.loginButton]}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.registerButton]}
            onPress={() => router.push('/registro')}
          >
            <Text style={styles.registerButtonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4A80F0',
    paddingVertical: 18,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  notificationButton: {
    position: 'relative',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF3B30',
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#666',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#4A80F0',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    maxWidth: 300,
    marginBottom: 15,
  },
  primaryButton: {
    backgroundColor: '#2A4BA0',
    borderWidth: 2,
    borderColor: '#F9B023',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  authButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingHorizontal: 16,
    width: '80%',
    maxWidth: 300,
  },
  loginButton: {
    backgroundColor: '#2A4BA0',
    flex: 1,
    marginRight: 8,
    marginBottom: 0,
  },
  registerButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2A4BA0',
    flex: 1,
    marginLeft: 8,
    marginBottom: 0,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerButtonText: {
    color: '#2A4BA0',
    fontWeight: 'bold',
  },
});
