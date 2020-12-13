import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Informacoes from './componentes/Informacoes';
import Cidade from './componentes/Cidade';
import Resultado from './componentes/Resultado';

export default function App() {
  const [votosFortaleza, setVotosFortaleza] = useState(0);
  const [votosQuixada, setVotosQuixada] = useState(0);
  const [votosMaranguape, setVotosMaranguape] = useState(0);
  const [votosMaracanau, setVotosMaracanau] = useState(0);

  const handleVotosFortaleza = useCallback((qtdFortal) =>{
    setVotosFortaleza(qtdFortal);
  },[]);

  const handleVotosQuixada = useCallback((qtdQxd) =>{
    setVotosQuixada(qtdQxd);
  },[]);

  const handleVotosMaranguape = useCallback((qtdMpe) =>{
    setVotosMaranguape(qtdMpe);
  },[]);

  const handleVoteMaracanau = useCallback((qtdMaraca) =>{
    setVotosMaracanau(qtdMaraca);
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>VOTAÇÃO DE CIDADES</Text>
      <br />

      <Informacoes cidade="FORTALEZA" quantidade={votosFortaleza}></Informacoes>
      <Informacoes cidade="QUIXADÁ" quantidade={votosQuixada}></Informacoes>
      <Informacoes cidade="MARANGUAPE" quantidade={votosMaranguape}></Informacoes>
      <Informacoes cidade="MARACANAÚ" quantidade={votosMaracanau}></Informacoes>

      <Resultado 
      resultado={
        [
          {cidade: 'Fortaleza', votos: votosFortaleza},
          {cidade: 'Quixadá', votos: votosQuixada},
          {cidade: 'Maranguape', votos: votosMaranguape},
          {cidade: 'Maracanaú', votos: votosMaracanau},
        ]}>
      </Resultado>

      <Text>Clique na melhor cidade:</Text><br />
      <Cidade cidade="FORTALEZA" setVotosCidade={handleVotosFortaleza}></Cidade>
      <Cidade cidade="QUIXADÁ" setVotosCidade={handleVotosQuixada}></Cidade>
      <Cidade cidade="MARANGUAPE" setVotosCidade={handleVotosMaranguape}></Cidade>
      <Cidade cidade="MARACANAÚ" setVotosCidade={handleVoteMaracanau}></Cidade>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '20px',
  }
});
