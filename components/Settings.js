import { SafeAreaView, View, Text } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { useContext } from "react";
import Header from "./header";
import Styles from "../styles/Styles";
import NewsContext from "./Context";

export default function Settings() {
  const { isMiles, setIsMiles } = useContext(NewsContext);

  return (
    <SafeAreaView style={Styles.container}>
      <Header title={"Settings"} />
      <View style={Styles.centerContent}>
        <Text style={Styles.settingLabel}>Select distance unit:</Text>
      
        <SegmentedButtons style={Styles.setbuttons}
          value={isMiles ? 'miles' : 'kilometers'}
          onValueChange={(value) => setIsMiles(value === 'miles')}
          buttons={[
            { value: 'kilometers', label: 'Kilometers' },
            { value: 'miles', label: 'Miles' }
          ]}
          theme={{ colors: { secondaryContainer: '#1e88e5' } }}
        />
      </View>
    </SafeAreaView>
  );
}
