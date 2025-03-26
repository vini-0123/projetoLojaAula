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
} from 'react-native';

import conexao from '../factory/firebase';
import { LinearGradient } from 'expo-linear-gradient';

export default function CadastroUser({ navigation }) {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeTodo, setNomeTodo] = useState('');
  const [pais, setPais] = useState('');
  const [tel, setTel] = useState('');

  function registrarProduto() {
    conexao.collection('tbclientes').add({
      nomeCompleto: nomeTodo,
      nome: nome,
      email: email,
      senha: senha,
      pais: pais,
      telefone: tel,
    });
    setEmail('');
    setNome('');
    setSenha('');
    setNomeTodo('');
    setPais('');
    setTel('');
    alert('Dados cadastrados com sucesso!');
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#1E1E1E' }, // Muda a cor do header
      headerTintColor: '#FFF', // Muda a cor do texto e ícones
      headerTitleStyle: { fontWeight: 'bold' }, // Deixa o texto do título em negrito
    });
  }, [navigation]);

  return (
    <SafeAreaView style={estilo.fundo}>
      <View style={estilo.view}>
        <Text style={estilo.paragraph}> Cadastro </Text>
        <TextInput
          style={estilo.input}
          placeholder="Nome Completo"
          onChangeText={setNomeTodo}
          value={nomeTodo}
          placeholderTextColor="#000"
        />
        <TextInput
          style={estilo.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor="#000"
        />
        <TextInput
          style={estilo.input}
          placeholder="Nome de Usuário"
          onChangeText={setNome}
          value={nome}
          placeholderTextColor="#000"
        />
        <TextInput
          style={estilo.input}
          placeholder="Senha"
          onChangeText={setSenha}
          value={senha}
          placeholderTextColor="#000"
        />
        <TextInput
          style={estilo.input}
          placeholder="País"
          onChangeText={setPais}
          value={pais}
          placeholderTextColor="#000"
        />
        <TextInput
          style={estilo.input}
          placeholder="Telefone"
          onChangeText={setTel}
          value={tel}
          placeholderTextColor="#000"
        />
        <TouchableOpacity onPress={registrarProduto} style={estilo.btn}>
          <LinearGradient
            colors={['#FF00FF', '#8B008B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={estilo.gradiente}>
            <Text style={estilo.textoBtn}>Registrar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  fundo: {
    backgroundColor: '#1C1C1C',
    flex: 1,
  },
  paragraph: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#BA55D3',
  },
  input: {
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 7.5,
    paddingHorizontal: 10,
    width: '95%',
    borderRadius: 5,
    backgroundColor: '#FFE6FF',
    borderWidth: 1,
    borderColor: '#aaa',
    outlineColor: '#FFE6FF',
    textAlign: 'center',
    alignSelf: 'center',
  },
  btn: {
    width: 180,
    alignSelf: 'center',
    height: 38,
    borderRadius: 4,
    backgroundColor: '#4285F4',
  },
  textoBtn: {
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#fff',
    alignSelf: 'center',
  },
  gradiente: {
    borderRadius: 4,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
