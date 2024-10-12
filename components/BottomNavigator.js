import React, { useState, useContext } from 'react';
import { BottomNavigation } from 'react-native-paper';
import ExerciseFormPage from './ExerciseFormPage';
import ListComponent from './ListComponent';
import Settings from './Settings';
import Context from './Context'; 

export default function BottomNavigator() {
  const [navIndex, setNavIndex] = useState(0);
  const { exe, setExe, isMiles, setIsMiles } = useContext(Context);

  const routes = [
    { key: 'exercise', title: 'Add Exercise', focusedIcon: 'plus' },
    { key: 'list', title: 'List', focusedIcon: 'format-list-bulleted' },
    { key: 'settings', title: 'Settings', focusedIcon: 'cog-outline' },
  ];

  const renderScene = BottomNavigation.SceneMap({
    exercise: ExerciseFormPage,
    list: ListComponent,
    settings: Settings,
  });

  return (
    <BottomNavigation
      navigationState={{ index: navIndex, routes }}
      onIndexChange={setNavIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#f7fafa' }}
      theme={{ colors: { secondaryContainer: '#1e88e5' } }}
    />
  );
}
