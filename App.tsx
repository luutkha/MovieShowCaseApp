import {NativeBaseProvider, StatusBar} from 'native-base';
import React, { useEffect } from 'react';
import {Navigation} from './src/navigation/common';
import theme from './src/themes/nativebase';

const App: React.FC = () => {
  
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar backgroundColor="#F97316" />
      <Navigation />
    </NativeBaseProvider>
  );
};

export default App;
