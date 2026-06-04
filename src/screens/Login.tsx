import { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useAuthStore } from '../store/useAuthStore';

import { styles } from '../styles/authStyles';

export default function Login({ navigation }: any) {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const login = useAuthStore(
    (state) => state.login
  );

  async function handleLogin() {

    if (!email || !password) {

      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );

      return;
    }

    const result = await login(
      email,
      password
    );

    if (!result.success) {

      Alert.alert(
        'Erro',
        result.message
      );

      return;
    }

    setEmail('');
    setPassword('');
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        FinTrack
      </Text>

      <Text style={styles.subtitle}>
        Faça login para continuar
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >

        <Text style={styles.buttonText}>
          Entrar
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() =>
          navigation.navigate('Register')
        }
      >

        <Text style={styles.linkText}>
          Não possui conta? Cadastre-se
        </Text>

      </TouchableOpacity>

    </View>

  );
}