import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RegistroEstudiantesComponent from './componentes/RegistroEstudiantesComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <RegistroEstudiantesComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
