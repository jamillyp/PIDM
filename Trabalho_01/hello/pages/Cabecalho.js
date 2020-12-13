import React,{Component} from 'react';
import { View, Text } from 'react-native';


export default class Cabecalho extends Component {
    
    render() {
        return (
            <View>
                <Text>Cabeçalho</Text>
                <Text>Nome da aluna: {this.props.nome} </Text>
                <Text>Curso da aluna: {this.props.curso} </Text>
            </View>
        );
    }
}
