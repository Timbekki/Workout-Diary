import Styles from "../styles/Styles";
import { Text } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient'; // Gradientti

export default function Header({ title }) {
  return (
    <LinearGradient
      colors={['#1e88e5', '#4f93e9', '#6aa8f4']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={Styles.headerContainer}
    >
      <Text variant="headlineLarge" style={Styles.headerText}>
        {title}
      </Text>
    </LinearGradient>
  );
}