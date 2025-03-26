// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import TelaLogin from './janelas/telalogin';
import CadastroJogos from './janelas/cadastro';
import CadastroUser from './janelas/cadastroUser';
import Splash from './janelas/splash';
import Home from './janelas/home';
import CadastroFunc from './janelas/cadastroFunc';
import LoginFunc from './janelas/loginFunc';

// Importe tanto o objeto firebase quanto o auth configurado

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MenuTabs({ route }) {
  const isFuncionario = route?.params?.isFuncionario ?? false; // Lendo corretamente
  const nomeUsuario = route?.params?.nomeUsuario ?? '';

  console.log('Valor de isFuncionario:', isFuncionario); // 🔍 Teste para verificar

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#eee',
        tabBarStyle: { backgroundColor: '#1E1E1E' },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ isFuncionario, nomeUsuario }}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      {isFuncionario && (
        <Tab.Screen
          name="Cadastro de Jogos"
          component={CadastroJogos}
          options={{
            tabBarLabel: 'Cadastro',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-box"
                color={color}
                size={size}
              />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={TelaLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cadastro" component={CadastroUser} />
        <Stack.Screen
          name="Menu"
          component={MenuTabs}
          options={{ headerShown: false }}
          initialParams={{ isFuncionario: true }} // Define um valor padrão
        />
        <Stack.Screen name="Cadastro Funcionario" component={CadastroFunc} />
        <Stack.Screen
          name="Login Funcionario"
          component={LoginFunc}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
