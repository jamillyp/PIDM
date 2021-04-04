import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { database } from './src/config/firebase';

export default function Delete() {

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

  function deletar(id) {
    database.collection('cursos').doc(id).delete();
  }
  
  return (
    <View style={styles.container}>
      <TextInput 
      placeholder="nome do curso"  
      value={ nome } 
      onChangeText={ setNome } />

      <TextInput 
      placeholder="coordenador(a)" 
      value={ coordenador } 
      onChangeText={ setCoordenador } />

      <Button
      title="Inserir" 
      onPress={ addCurso } />

      {cursos.map((curso) => 
      {
        return <>
            <Text key={ curso.id } >{ curso.nome } - { curso.coordenador }</Text>
            <Button title="Editar" onPress={() => editar(curso.id)}></Button>
            <Button title="Excluir" onPress={() => deletar(curso.id)}></Button>
          </>
      })}
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
});
