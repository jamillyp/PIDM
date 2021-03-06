import React, { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View, ScrollView, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { database } from '../../config/firebase';

const Add = () => {
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

  function addCurso() {
    database.collection('cursos').add({
      nome,
      coordenador
    });
  }

  function deletar(id) {
    database.collection('cursos').doc(id).delete();
    setState(false);
  }
  
  return (
    <>
    {state ? (
        <Modal>
          <Text style={{top: 200, marginLeft: 120, fontSize: 20, fontWeight: 'bold'}}>Deseja excluir?</Text>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
            <TouchableHighlight title="Não" onPress={() => setState(false)} style={{top: 250, alignItems: 'center', backgroundColor: '#93E9BE', width: 60, height: 40, textAlign: 'center', justifyContent: 'center', marginRight: 20, fontWeight: 'bold'}}>
              <Text style={{color: 'white'}}>
                Não
              </Text>
            </TouchableHighlight>

            {cursos.map((curso) => {
              return <TouchableHighlight title="Sim" onPress={() => deletar(curso.id)} style={{top: 250, alignItems: 'center', backgroundColor: '#FF6600', width: 60, height: 40, textAlign: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
              <Text style={{color: 'white'}}> Sim </Text> 
            </TouchableHighlight>
            })}
          </View>
        </Modal>
    ) : (
      false
  )}

    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >

      <View style={styles.container}>

        <Text style={{fontSize: 20, marginBottom: 20, fontWeight: 'bold'}}>CADASTRE UM CURSO</Text>

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

        <TouchableHighlight
        title="Inserir" 
        onPress={ addCurso }
        style={styles.button}
        >
            <Text style={styles.textButton}>
                SALVAR
            </Text>
        </TouchableHighlight>

        {cursos.map((curso) => {
          return <View style={styles.view}>

            <View style={styles.viewButton}>
              <Text key={ curso.id } style={styles.text}> { curso.nome } - { curso.coordenador }</Text>
            </View>

            <View style={styles.viewButton}>
              <TouchableHighlight style={styles.button2} title='Excluir' onPress={() => setState(true)}>
                <Text style={styles.textButton}>
                  <Feather name="x" size={30} color="#FF6961" />
                </Text>
              </TouchableHighlight>
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
    backgroundColor: '#F9EAC3',
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
    fontSize: 14,
    paddingLeft: 11
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
    width: '50%',
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

export default Add;
