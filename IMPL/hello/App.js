import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './pages/Cabecalho';
import Corpo from './pages/Corpo';
import Disciplina from './pages/Disciplina';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome='Jamilly' curso='Design Digital'></Cabecalho>

      <Corpo></Corpo>

      <Text>Disciplinas que está cursando:</Text>
      <Disciplina numero='1' disciplina='Projeto de Interface para Dispositivos Móveis'></Disciplina>
      <Disciplina numero='2' disciplina='Análise e Projeto de Sistemas'></Disciplina>
      <Disciplina numero='3' disciplina='Projeto Integrado IV'></Disciplina>
      <Disciplina numero='4' disciplina='Gestão da Informação e do Conhecimento'></Disciplina>
      <Disciplina numero='5' disciplina='Design e Inovação'></Disciplina>
      <Disciplina numero='6' disciplina='Concepção e Desenvolvimento de Produto'></Disciplina>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcbdb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
