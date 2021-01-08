import React, { Component } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import IMCCalc from '../IMCCalc';

export default class IMCApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            altura: null, 
            peso: null, 
            alturaInput: null, //para pegar altura do textInput
            pesoInput: null //para pegar peso do textInput
        };
    };
    calcularImc = ()=>{
        this.setState({
            peso: this.state.pesoInput,
            altura: this.state.alturaInput,
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}><h1>Calcule seu IMC</h1></Text>

                <TextInput
                    style={styles.textInput}
                    placeholder='Digite seu peso'
                    onChangeText={(pesoInput) => this.setState({pesoInput})}
                /><br />
                <TextInput
                    style={styles.textInput}
                    placeholder='Digite sua altura'
                    onChangeText={(alturaInput) => this.setState({alturaInput})}>
                </TextInput>

                <View style={styles.viewButton}>
                    <Button 
                        title='calcular'
                        onPress={()=>{this.calcularImc()}}  
                    />
                </View>

                <IMCCalc peso={this.state.peso} altura={this.state.altura}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5"
        },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
        },
    textInput: {
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 20
        },
    viewButton: {
        width: "93%",
        margin: 15,
        backgroundColor: "red"
    }
});