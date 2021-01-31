import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar'
import Routes from './src/router';
import Home from './src/componentes/Home';
import Cadastro from './src/componentes/Cadastro';

export default function App() {
  return (
    <>
      <StatusBar
      style="light" 
      backgroundColor="#000"
      translucent={false}
      />

      <Routes></Routes>
    </>
  );
}

