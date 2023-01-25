import { StyleSheet, Text, View,Platform ,StatusBar} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <>
      <StackNavigator/>
      <StatusBar style={styles.safeAreaForAndroid} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeAreaForAndroid: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
},
});
