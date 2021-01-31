import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableHighlight, Modal, Alert } from 'react-native';

export default function Cadastro() {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <View style={estiloCadastro.container}>                
            
            <TextInput
            style={estiloCadastro.estiloText}
            placeholder='Digite seu nome'
            />
            <TextInput
            style={estiloCadastro.estiloText}
            placeholder='Digite sua idade'
            />
            <TextInput
            style={estiloCadastro.estiloText}
            placeholder='Digite seu E-mail'
            />
            <TouchableHighlight>
                <View style={estiloCadastro.button}>
                    <Text style={estiloCadastro.buttonText}> ENVIAR </Text>
                </View>
            </TouchableHighlight>

            <View>
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                }}>
                <View style={estiloCadastro.centeredView}>
                <View style={estiloCadastro.modalView}>
                <Text style={estiloCadastro.modalText}>Hello World!</Text>

                <TouchableHighlight
                onPress={() => {
                    setModalVisible(!modalVisible);
                    }}>
                <Text style={estiloCadastro.textStyle}>Hide Modal</Text>
                </TouchableHighlight>
                </View>
                </View>
                </Modal>

                <TouchableHighlight
                style={estiloCadastro.openButton}
                onPress={() => {
                setModalVisible(true);
                }}>
                <Text style={estiloCadastro.textStyle}>Show Modal</Text>
                </TouchableHighlight>
            </View>

        </View>
    );
}

const estiloCadastro = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        padding: 20,
        color: 'pink',
        fontWeight: 'bold'
    },
    estiloText: {
        height: 45,
        width: 300,
        borderColor: "pink",
        borderWidth: 2,
        paddingLeft: 20,
        marginBottom: 20 
    },
    button:{
        alignItems: 'center',
        width: 150,
        height: 45,
        backgroundColor: 'pink',
    },
    buttonText:{
        padding: 13,
        color: 'white'
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },

});