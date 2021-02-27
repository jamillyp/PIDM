import React from 'react';
import { View } from 'react-native';

import Albums from './src/components/Albums.jsx';
import Header from './src/components/Header.jsx'

export default function App() {
  return (
    <View>
      <Header title='Albums' />
      <Albums />
    </View>
  );
}

