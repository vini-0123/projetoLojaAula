import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../css/homeEstilo';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ route }) {
  const { nomeUsuario, isFuncionario } = route.params || {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTexto}>Vini Games</Text>
        </View>
          <LinearGradient
            colors={['rgba(38, 97, 140, 0.9)', 'rgba(0, 34, 110, 0.9)']}
            start={{ x: 0.1, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradiente3}>
            <View style={styles.viewPesquisa3}>
              <TouchableOpacity>
              {!isFuncionario &&
                <Image
                  style={styles.imgPerfil}
                  source={require('../img/teste.jpg')}
                />}
              </TouchableOpacity>
              <TouchableOpacity>
                 {!isFuncionario &&<Text style={styles.textoPesquisa2}>{nomeUsuario || 'Usuário'}</Text>}
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.textoPesquisa}>Sucessos</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textoPesquisa}>Categorias</Text>
            </TouchableOpacity>
            <View style={styles.viewPesquisa2}>
              <TextInput
                style={styles.barraPesquisa}
                placeholder="Pesquisa..."
              />
              <TouchableOpacity style={styles.btn}>
                <Ionicons name="search" size={32} color="#000" />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        <Text style={styles.textoDestaques}>DESTAQUES E PROMOÇÕES</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.row}>
          <TouchableOpacity style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.gameImage}
                source={require('../img/teste.jpg')}
              />
            </View>
            <LinearGradient
              colors={['rgba(56,95,126, 1)', 'rgba(56,95,126, 0)']}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: -0.1 }}
              style={styles.gradiente2}>
              <View style={styles.infoContainer}>
                <Text style={styles.gameTitle}>Drake & Josh</Text>
                <Text style={styles.offerTitle}>OFERTA DO MEIO DA SEMANA</Text>
                <Text style={styles.offerValidity}>
                  Válida até 13 de mar. às 14:00
                </Text>
                <View style={styles.discountRow}>
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>-75%</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.oldPrice}>R$ 99,99</Text>
                    <Text style={styles.newPrice}>R$ 24,99</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.gameImage}
                source={require('../img/teste.jpg')}
              />
            </View>
            <LinearGradient
              colors={['rgba(56,95,126, 1)', 'rgba(56,95,126, 0)']}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: -0.1 }}
              style={styles.gradiente2}>
              <View style={styles.infoContainer}>
                <Text style={styles.gameTitle}>Minecraft</Text>
                <View style={styles.discountRow}>
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>-50%</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.oldPrice}>R$ 200,00</Text>
                    <Text style={styles.newPrice}>R$ 100,00</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.gameImage}
                source={require('../img/teste.jpg')}
              />
            </View>
            <LinearGradient
              colors={['rgba(56,95,126, 1)', 'rgba(56,95,126, 0)']}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: -0.1 }}
              style={styles.gradiente2}>
              <View style={styles.infoContainer}>
                <Text style={styles.gameTitle}>GTA V</Text>
                <Text style={styles.offerTitle}>PROMOÇÃO RELÂMPAGO</Text>
                <Text style={styles.offerValidity}>Válida até 10 de mar.</Text>
                <View style={styles.discountRow}>
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>-80%</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.oldPrice}>R$ 150,00</Text>
                    <Text style={styles.newPrice}>R$ 30,00</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
        <Text style={styles.textoDestaques}>EXPLORE PELO VINI GAMES</Text>
        <View style={styles.viewAlinhar}>
          <TouchableOpacity style={styles.botaoExplorar}>
            <LinearGradient
              colors={['rgba(52, 152, 219, 1)', 'rgba(52, 152, 219, 0)']}
              start={{ x: 1, y: 0 }}
              end={{ x: -0.25, y: 0 }}
              style={styles.gradiente}>
              <Text style={styles.textoExplorar}>LANÇAMENTOS</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoExplorar}>
            <LinearGradient
              colors={['rgba(52, 152, 219, 1)', 'rgba(52, 152, 219, 0)']}
              start={{ x: 1, y: 0 }}
              end={{ x: -0.25, y: 0 }}
              style={styles.gradiente}>
              <Text style={styles.textoExplorar}>GRATUITO</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.viewAlinhar}>
          <TouchableOpacity style={styles.botaoExplorar}>
            <LinearGradient
              colors={['rgba(52, 152, 219, 1)', 'rgba(52, 152, 219, 0)']}
              start={{ x: 1, y: 0 }}
              end={{ x: -0.25, y: 0 }}
              style={styles.gradiente}>
              <Text style={styles.textoExplorar}>OFERTAS</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoExplorar}>
            <LinearGradient
              colors={['rgba(52, 152, 219, 1)', 'rgba(52, 152, 219, 0)']}
              start={{ x: 1, y: 0 }}
              end={{ x: -0.25, y: 0 }}
              style={styles.gradiente}>
              <Text style={styles.textoExplorar}>CATEGORIAS</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text style={styles.textoOfertas}>OFERTAS ESPECIAIS</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.row}>
          {/* Botão 1 */}
          <TouchableOpacity style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.gameImage}
                source={require('../img/teste.jpg')}
              />
            </View>
            <LinearGradient
              colors={['rgba(56,95,126, 1)', 'rgba(56,95,126, 0)']}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: -0.1 }}
              style={styles.gradiente2}>
              <View style={styles.infoContainer}>
                <Text style={styles.offerTitle}>OFERTA DO MEIO DA SEMANA</Text>
                <Text style={styles.offerValidity}>
                  Válida até 13 de mar. às 14:00
                </Text>
                <View style={styles.discountRow}>
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>-75%</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.oldPrice}>R$ 99,99</Text>
                    <Text style={styles.newPrice}>R$ 24,99</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Botão 2 */}
          <TouchableOpacity style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.gameImage}
                source={require('../img/teste.jpg')}
              />
            </View>
            <LinearGradient
              colors={['rgba(56,95,126, 1)', 'rgba(56,95,126, 0)']}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: -0.1 }}
              style={styles.gradiente2}>
              <View style={styles.infoContainer}>
                <Text style={styles.offerTitle}>OFERTA DO DIA</Text>
                <Text style={styles.offerValidity}>Válida até 20 de mar.</Text>
                <View style={styles.discountRow}>
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>-50%</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.oldPrice}>R$ 200,00</Text>
                    <Text style={styles.newPrice}>R$ 100,00</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Botão 3 */}
          <TouchableOpacity style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.gameImage}
                source={require('../img/teste.jpg')}
              />
            </View>
            <LinearGradient
              colors={['rgba(56,95,126, 1)', 'rgba(56,95,126, 0)']}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: -0.1 }}
              style={styles.gradiente2}>
              <View style={styles.infoContainer}>
                <Text style={styles.offerTitle}>PROMOÇÃO RELÂMPAGO</Text>
                <Text style={styles.offerValidity}>Válida até 10 de mar.</Text>
                <View style={styles.discountRow}>
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>-80%</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.oldPrice}>R$ 150,00</Text>
                    <Text style={styles.newPrice}>R$ 30,00</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
        <Text style={styles.textoDestaques}>EXPLORAR POR CATEGORIA</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.row}>
          <TouchableOpacity style={styles.botaoCategoria}>
            <ImageBackground
              source={require('../img/teste.jpg')}
              style={styles.imagemCategoria}>
              <LinearGradient
                colors={['rgba(52, 152, 219, 1)', 'rgba(52, 152, 219, 0)']}
                start={{ x: 0, y: 1 }}
                end={{ x: -0.3, y: 0 }}
                style={styles.gradiente}>
                <Text style={styles.textoCategoria}>Ação</Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoCategoria}>
            <ImageBackground
              source={require('../img/teste.jpg')}
              style={styles.imagemCategoria}>
              <LinearGradient
                colors={['rgba(52, 152, 219, 1)', 'rgba(52, 152, 219, 0)']}
                start={{ x: 0, y: 1 }}
                end={{ x: -0.3, y: 0 }}
                style={styles.gradiente}>
                <Text style={styles.textoCategoria}>Aventura</Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoCategoria}>
            <ImageBackground
              source={require('../img/teste.jpg')}
              style={styles.imagemCategoria}>
              <LinearGradient
                colors={['rgba(52, 152, 219, 1)', 'rgba(52, 152, 219, 0)']}
                start={{ x: 0, y: 1 }}
                end={{ x: -0.3, y: 0 }}
                style={styles.gradiente}>
                <Text style={styles.textoCategoria}>Tiro</Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
