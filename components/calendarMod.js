import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars'; 
import ReactNativeModal from 'react-native-modal'; 
import { Button } from 'react-native-paper';
import Styles from '../styles/Styles';

export default function CalendarModal({ date, setDate }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDayPress = (day) => {
    setDate(day.dateString);
    toggleModal();
  };

  return (
    <>
     
      <Pressable onPress={toggleModal} style={Styles.dateButton}>
        <Text style={Styles.buttonText}>Select Date: {date}</Text>
      </Pressable>

    
      <ReactNativeModal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={Styles.modalContent}>
          <Calendar
            onDayPress={handleDayPress}
            maxDate={new Date().toISOString().split('T')[0]}
            markedDates={{
              [date]: { selected: true, selectedColor: '#1e88e5' },
            }}
            theme={{
              selectedDayBackgroundColor: '#1e88e5',
              todayTextColor: '#f51685', 
              arrowColor: '#f51685'
            }}
          />
          <Button mode="contained" onPress={toggleModal} style={Styles.button}>
            Close Calendar
          </Button>
        </View>
      </ReactNativeModal>
    </>
  );
}
