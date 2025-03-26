import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'; // Import para navegação
import estilo from '../css/estilo';
import { LinearGradient } from 'expo-linear-gradient';
import conexao from '../factory/firebase';

export default function LoginFunc() {
  const { width, height } = Dimensions.get('window');
  const [email, setEmail] = useState(''); // Inicializando com string vazia
  const [senha, setSenha] = useState('');
  const navigation = useNavigation(); // Hook para obter o objeto de navegação

  function login() {
    const database = conexao;

    database
      .collection('tbfuncionarios')
      .where('emailCorporativo', '==', email)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          let loginRealizado = false;

          querySnapshot.forEach((doc) => {
            const cliente = doc.data();
            if (cliente.senha === senha) {
              loginRealizado = true;
              // Navegar para a tela 'Menu' e passar o nome do usuário como parâmetro
              navigation.navigate('Menu', {
                isFuncionario: true, 
              });
            }
          });

          if (!loginRealizado) {
            Alert.alert('Erro', 'Senha incorreta.');
          }
        } else {
          Alert.alert('Erro', 'Email não encontrado.');
        }
      })
      .catch((error) => {
        console.error('Erro ao tentar fazer login:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.');
      });
  }

  return (
    <SafeAreaView style={estilo.fundo}>
      <View>
        <Text style={estilo.paragraph}>Iniciar Sessão</Text>
        <Text style={estilo.textoGeral}>Email Corporativo</Text>
        <TextInput
          style={estilo.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <Text style={estilo.textoGeral}>Senha</Text>
        <TextInput
          style={estilo.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={estilo.textoLink}>Esqueceu seu e-mail?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={estilo.btn3}
        onPress={() => login(email, senha, navigation)}>
        <LinearGradient
          colors={['#FF00FF', '#8B008B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={estilo.gradiente}>
          <Text style={estilo.textoBtn}>Entrar</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={estilo.btn4}
        onPress={() => navigation.navigate('Login')}>
        <LinearGradient
          colors={['#FF00FF', '#8B008B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={estilo.gradiente}>
          <Text style={estilo.textoBtn3}>Sou Cliente</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={estilo.textoLink}
          onPress={() => navigation.navigate('Cadastro Funcionario')}>
          Não possui conta?
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
