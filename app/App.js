import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './pages/Chat'
import Header from './pages/navigation/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Chat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
