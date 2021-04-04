import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import { database } from '../../config/firebase';

export default function Add() {

  const [ cursos, setCursos ] = useState([]);
  const [ nome, setNome ] = useState('');
  const [ coordenador, setCoordenador ] = useState('');

  useEffect(() => {
    database.collection('cursos').onSnapshot((query) => {
      const listaCursos = [];
      query.forEach((doc) => {
        listaCursos.push({...doc.data(), id: doc.id});
      })
      setCursos(listaCursos);
    })
  }, [])

  function addCurso() {
    database.collection('cursos').add({
      nome,
      coordenador
    });
  }
  
  return (
    <View style={styles.container}>

      <TextInput 
      style={styles.text}
      placeholder="nome do curso"  
      value={ nome } 
      onChangeText={ setNome } />

      <TextInput 
      style={styles.text}
      placeholder="coordenador(a)" 
      value={ coordenador } 
      onChangeText={ setCoordenador } />

      <TouchableHighlight
      title="Inserir" 
      onPress={ addCurso }
      style={styles.button}
      >
          <Text style={styles.textButton}>
              Inserir
          </Text>
      </TouchableHighlight>


      {cursos.map((curso) => {
        return <View style={styles.viewButton}> 
        <Text key={ curso.id }> { curso.nome } - { curso.coordenador }</Text>
        <TouchableHighlight style={styles.button2} title='Excluir'>
            <Text style={styles.textButton}>
                Excluir
            </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button2} title='Excluir'>
            <Text style={styles.textButton}>
                Editar
            </Text>
        </TouchableHighlight>
        </View>
        
      })}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      width: '80%',
      height: 50,
      borderRadius: 5,
      fontSize: 16
  },
  button: {
    justifyContent: 'center',
     width: '80%',
     height: '8%',
     backgroundColor: 'black'
  },
  viewButton: {
      top: 10,
      flexDirection: 'row',
      marginBottom: 10,
      width: '80%',
      height: '5%',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  button2: {
    justifyContent: 'center',
     backgroundColor: 'grey',
     borderRadius: 5
  },
  textButton:{
      fontWeight: 'bold',
      fontSize: 15,
      textAlign: 'center',
      color: 'white',
  }
});
