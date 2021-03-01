import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AlbumList from './AlbumList';
import Modal from './Modal';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                name = 'Home'
                component = {AlbumList}
                options = {{
                    headerShown: false
                }}
                />
                <Stack.Screen
                name = 'Modal'
                component = {Modal}
                options = {{
                    headerShown: false
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;