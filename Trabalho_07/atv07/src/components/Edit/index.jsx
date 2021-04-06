import React, { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View, ScrollView, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { database } from '../../config/firebase';

const Edit = () => {
  const [ cursos, setCursos ] = useState([]);
  const [ nome, setNome ] = useState('');
  const [ coordenador, setCoordenador ] = useState('');
  const [state, setState] = useState(false);

  const [setUserType] = useState(null);
  const getUserType = useCallback(async () => {
    const response = await AsyncStorage.getItem('@storage_Key');
    setUserType(response);
  }, []);

  useEffect(() => {
    getUserType();
    handleCloseDrawer();
    database.collection('cursos').onSnapshot((query) => {
      const listaCursos = [];
      query.forEach((doc) => {
        listaCursos.push({...doc.data(), id: doc.id});
      })
      setCursos(listaCursos);
    })
  },  [getUserType, handleCloseDrawer])

  const handleCloseDrawer = useCallback(() => {
    setState(false);
  }, []);

  function editar(id) {
    database.collection('cursos').doc(id).update({
      nome, 
      coordenador
    });
  }

  return (
    <>

    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >

      <View style={styles.container}>
          <TextInput 
          style={styles.textInput}
          label="qual o nome do curso?"
          placeholder="qual o nome do curso?"  
          value={ nome } 
          onChangeText={ setNome } />
  
          <TextInput 
          style={styles.textInput}
          label="qual o(a) coordenador(a)?"
          placeholder="qual o(a) coordenador(a)?" 
          value={ coordenador } 
          onChangeText={ setCoordenador } />
          {cursos.map((curso) => {
          return <TouchableHighlight
          title="Inserir" 
          onPress={ () => editar(curso.id) }
          style={styles.button}
          >
            <Text style={styles.textButton}>
                SALVAR
            </Text>
          </TouchableHighlight>
        })}
      
        {cursos.map((curso) => {
          return <View style={styles.view}>
            <View style={styles.viewButton}>
              <Text key={ curso.id } style={styles.text}> { curso.nome } - { curso.coordenador }</Text>
            </View>
          </View>
        })}

      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#20B2AA',
  },
  textInput: {
    paddingLeft: 10,
    width: '80%',
    height: 50,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: 'white'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
  },
  button: {
    justifyContent: 'center',
    width: '80%',
    height: '8%',
    backgroundColor: '#FF6600'
  },
  viewButton: {
    marginBottom: 3,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#93E9BE',
    height: 50
  },
  button2: {
    justifyContent: 'center',
  },
  textButton:{
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  view: {
    flexDirection: 'row',
    width: '80%',
    top: 15,
    marginBottom: 10,
    paddingBottom: 5,

  }
});

export default Edit;
