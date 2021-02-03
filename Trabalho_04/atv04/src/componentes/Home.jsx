import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
        const navigation = useNavigation();

        return (
            <View style={estiloHome.container}>

                <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
                    <View style={estiloHome.button}>
                        <Text style={estiloHome.buttonText}>CADASTRO</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('imc')}>
                    <View style={estiloHome.button}>
                        <Text style={estiloHome.buttonText}>IMC</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('sobre')}>
                    <View style={estiloHome.button}>
                        <Text style={estiloHome.buttonText}>SOBRE</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }

const estiloHome = StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#41436A'
    },
    button:{
        marginBottom: 30,
        alignItems: 'center',
        width: 260,
        backgroundColor: '#F64668',
        borderRadius: 5
    },
    buttonText:{
        padding: 20,
        color: 'white'
    }
});