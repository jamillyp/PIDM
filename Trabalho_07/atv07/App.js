import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Add from './src/components/Add';
import Edit from './src/components/Edit';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inserir/Deletar" component={Add} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="Editar/Atualizar" component={Edit} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}