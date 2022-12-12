import { StyleSheet, Dimensions, View, Text, Pressable } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default function App() {
  return (
    <View style={styles.header}>
        <Pressable>
            <Text>Retour</Text>
        </Pressable>
        <Text>Justin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: width,
    maxHeight: 60,
    backgroundColor: '#eee',
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
});
