import React, { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import Context from './components/Context';
import BottomNavTheme from './styles/BottomNavTheme';
import BottomNavigator from './components/BottomNavigator';

export default function App() {

  
  const [exe, setExe] = useState([]); 
  const [isMiles, setIsMiles] = useState(false); 

  return (
    <PaperProvider theme={BottomNavTheme}>
      <Context.Provider value={{ exe, setExe, isMiles, setIsMiles }}>
        <BottomNavigator />
      </Context.Provider>
    </PaperProvider>
  );
}
