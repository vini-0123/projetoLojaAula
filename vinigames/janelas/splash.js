import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import mascara from '../css/estilo';

export default function Splash({ navigation }) {
  async function prepare() {
    try {
      //await aguarde a promise tempo função
      await new Promise((tempo) => setTimeout(tempo, 4000));
    } catch (e) {
      Alert.alert(e);
    } finally {
      navigation.navigate('Login');
    }
  }

  prepare();

  return (
    <SafeAreaView style={estilo.fundo}>
      <Text style={estilo.textoSplash}>Vini Games</Text>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  fundo: {
    backgroundColor: '#1C1C1C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoSplash: {
    fontWeight: 'bold',
    fontSize: 21.5,
    color: '#fff',
  },
});
