import { useContext, useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import Styles from '../styles/Styles';
import Context from './Context';
import Header from './header';

export default function ListComponent() {
  const { exe, isMiles } = useContext(Context); 
  const [displayedNews, setDisplayedNews] = useState([]);

  useEffect(() => {
    if (exe && Array.isArray(exe)) {
      setDisplayedNews(
        exe.map((item) => ({
          ...item,
          distance: isMiles ? (item.distance * 0.621371).toFixed(2) : item.distance,
        })).reverse()
      );
    }
  }, [isMiles, exe]);

  const getIcon = (exerciseType) => {
    switch (exerciseType?.toLowerCase()) {
      case 'running':
        return 'run';
      case 'cycling':
        return 'bicycle';
      case 'swimming':
        return 'swim';
      default:
        return 'run';
    }
  };

  return (

      

    <SafeAreaView style={Styles.container}>
      <Header title={"Your Exercises"} />
      {displayedNews.length > 0 ? (
        <FlatList
          data={displayedNews}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={Styles.listItemBox}>
              <View style={Styles.iconAndTextRow}>
                <IconButton icon={getIcon(item.exerciseType)} size={24} />
                <Text style={Styles.exerciseType}>{item.exerciseType}</Text>
              </View>
              <Text style={Styles.detailText}>
                Distance: {item.distance} {isMiles ? 'mi' : 'km'}
              </Text>
              <Text style={Styles.detailText}>Duration: {item.duration} min</Text>
              <Text style={Styles.detailText}>
                Date: {item.date ? new Date(item.date).toLocaleDateString() : "No date"}
              </Text>
            </View>
          )}
        />
      ) : (
        <Text style={Styles.detailText}>No exercises added yet.</Text>
      )}
    </SafeAreaView>
  );
}
