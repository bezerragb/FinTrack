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

export default function Register({
  navigation,
}: any) {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] =
    useState('');

  const register = useAuthStore(
    (state) => state.register
  );

  async function handleRegister() {

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim()
    ) {

      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );

      return;
    }

    const result = await register(
      name,
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

    Alert.alert(
      'Sucesso',
      'Usuário cadastrado com sucesso.'
    );

    setName('');
    setEmail('');
    setPassword('');

    navigation.navigate('Login');
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Criar Conta
      </Text>

      <Text style={styles.subtitle}>
        Cadastre-se para começar a controlar
        suas finanças
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={name}
        onChangeText={setName}
      />

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
        onPress={handleRegister}
      >

        <Text style={styles.buttonText}>
          Cadastrar
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() =>
          navigation.navigate('Login')
        }
      >

        <Text style={styles.linkText}>
          Já possui conta? Entrar
        </Text>

      </TouchableOpacity>

    </View>

  );
}