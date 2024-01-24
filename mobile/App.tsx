import React from 'react';
import Routes from './src/routes';


import {StatusBar, View} from 'react-native';
import { Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });



  return (
    <>

      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    
    <Routes />
    </>
  );
}
