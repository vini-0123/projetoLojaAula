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

export default function CadastroJogos() {
  const [nome, setNome] = useState('');
  const [dev, setDev] = useState('');
  const [distri, setDistri] = useState('');
  const [serie, setSerie] = useState('');
  const [avalia, setAvalia] = useState('');
  const [classi, setClassi] = useState('');
  const [genero, setGenero] = useState('');
  const [versao, setVersao] = useState('');
  const [modo, setModo] = useState('');
  const [data, setData] = useState('');
  const [compati, setCompati] = useState('');

  function registrarProduto() {
    conexao.collection('tbproduto').add({
      nome: nome,
      dev: dev,
      distribuidor: distri,
      serie: serie,
      avaliacao: avalia,
      classificacao: classi,
      genero: genero,
      modo: modo,
      data: data,
      compatibilidade: compati,
    });
    setNome('');
    setDev('');
    setDistri('');
    setSerie('');
    setAvalia('');
    setClassi('');
    setGenero('');
    setModo('');
    setData('');
    setCompati('');
    alert('Dados cadastrados com sucesso!');
  }

  return (
    <SafeAreaView style={estilo.fundo}>
    <View style={estilo.view}>
      <Text style={estilo.paragraph}> Cadastro </Text>
      <TextInput
        style={estilo.input}
        placeholder="Nome"
        onChangeText={setNome}
        value={nome}
        placeholderTextColor="#000"
      />
      <TextInput
        style={estilo.input}
        placeholder="Desenvolvedor"
        onChangeText={setDev}
        value={dev}
        placeholderTextColor="#000"
      />
      <TextInput
        style={estilo.input}
        placeholder="Distribuidor"
        onChangeText={setDistri}
        value={distri}
        placeholderTextColor="#000"
      />
      <TextInput
        style={estilo.input}
        placeholder="Franquia"
        onChangeText={setSerie}
        value={serie}
        placeholderTextColor="#000"
      />
      <TextInput
        style={estilo.input}
        placeholder="Avaliação"
        onChangeText={setAvalia}
        value={avalia}
        placeholderTextColor="#000"
      />
      <TextInput
        style={estilo.input}
        placeholder="Classificação Indicativa"
        onChangeText={setClassi}
        value={classi}
        placeholderTextColor="#000"
      />
      <TextInput
        style={estilo.input}
        placeholder="Genero"
        onChangeText={setGenero}
        value={genero}
        placeholderTextColor="#000"
      />
      <TextInput
        style={estilo.input}
        placeholder="Versão"
        onChangeText={setVersao}
        value={versao}
        placeholderTextColor="#000"
      />
      <TextInput
        style={estilo.input}
        placeholder="Modo de Jogo"
        onChangeText={setModo}
        value={modo}
        placeholderTextColor="#000"
      />
      <TextInput
        style={estilo.input}
        placeholder="Data de Lançamento"
        onChangeText={setData}
        value={data}
        placeholderTextColor="#000"
      />
      <TextInput
        style={estilo.input}
        placeholder="Compatibilidade"
        onChangeText={setCompati}
        value={compati}
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
  view:{
    justifyContent: 'center',
    alignItems: 'center',
  }
});
