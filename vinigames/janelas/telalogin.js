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
} from 'react-native';

import { useNavigation } from '@react-navigation/native'; // Import para navegação
import estilo from '../css/estilo';
import { LinearGradient } from 'expo-linear-gradient';
import conexao from '../factory/firebase';

export default function TelaLogin() {
  const [email, setEmail] = useState(''); // Inicializando com string vazia
  const [senha, setSenha] = useState('');
  const navigation = useNavigation(); // Hook para obter o objeto de navegação

  function login() {
    const database = conexao;

    database
      .collection('tbclientes')
      .where('email', '==', email)
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
                isFuncionario: false,
                nomeUsuario: cliente.nome,
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
      <ImageBackground
        source={require('../img/fundoJogos.jpg')}
        style={estilo.imgFundo}>
        {/* Adiciona um View para organizar os elementos dentro do ImageBackground */}
        <View>
          <Text style={estilo.paragraph}>Iniciar Sessão</Text>
          <Text style={estilo.textoGeral}>Email</Text>
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

        <TouchableOpacity style={estilo.btn3} onPress={login}>
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
          onPress={() => navigation.navigate('Login Funcionario')}>
          <LinearGradient
            colors={['#FF00FF', '#8B008B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={estilo.gradiente}>
            <Text style={estilo.textoBtn3}>Sou Funcionário</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={estilo.textoLink}
            onPress={() => navigation.navigate('Cadastro')}>
            Não possui conta?
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
