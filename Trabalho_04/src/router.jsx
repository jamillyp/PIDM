import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro';
import Sobre from './componentes/Sobre';
import IMCalc from './componentes/IMCalc';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="home" 
                component={Home}
                options={{
                    title: 'HOME',
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <Feather
                            name="home"
                            size={24}
                            color='grey'
                            />
                        </TouchableOpacity>
                    )
                }}
                 />
                <Stack.Screen name="cadastro"
                component={Cadastro}
                options={{
                    title: 'CADASTRO',
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}} />
                    )
                }} 
                />
                <Stack.Screen name="imc"
                component={IMCalc}
                options={{
                    title: 'IMC',
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}} />
                    )
                }} 
                />
                <Stack.Screen name="sobre"
                component={Sobre}
                options={{
                    title: 'SOBRE',
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}} />
                    )
                }} 
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
