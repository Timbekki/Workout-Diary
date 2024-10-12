import { useState, useContext } from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import { Button, TextInput, SegmentedButtons } from 'react-native-paper';
import Header from './header';
import Styles from '../styles/Styles';
import Context from './Context';
import CalendarModal from './calendarMod';

export default function ExerciseFormPage() {
  const { exe, setExe } = useContext(Context);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [exerciseType, setExerciseType] = useState('Running');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const addWorkout = () => {
   
    if (!distance || Number(distance) <= 0 || !duration || Number(duration) <= 0) {
      alert("Distance and duration must be positive numbers");
      return;
    }

    const newWorkout = { distance, duration, exerciseType, date };

    
    if (Array.isArray(exe)) {
      setExe([...exe, newWorkout]);
    } else {
      setExe([newWorkout]); 
    }

    setDistance('');
    setDuration('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={Styles.container}>
        <Header title="Add Exercise" />

        <View style={Styles.formBox}>
          <SegmentedButtons
            value={exerciseType}
            onValueChange={setExerciseType}
            buttons={[
              { value: 'Cycling', label: 'Cycling', icon: 'bicycle' },
              { value: 'Running', label: 'Running', icon: 'run' },
              { value: 'Swimming', label: 'Swimming', icon: 'swim' },
            ]}
            theme={{ colors: { secondaryContainer: '#1e88e5' } }} 
          />

          <TextInput
            label="Distance (km / miles)"
            value={distance}
            onChangeText={setDistance}
            keyboardType="numeric"
            mode="outlined"
            style={Styles.input}
          />

          <TextInput
            label="Duration (min)"
            value={duration}
            onChangeText={setDuration}
            keyboardType="numeric"
            mode="outlined"
            style={Styles.input}
          />

          <CalendarModal date={date} setDate={setDate} />

          <Button mode="contained" onPress={addWorkout} style={Styles.button}>
            Add Exercise
          </Button>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
