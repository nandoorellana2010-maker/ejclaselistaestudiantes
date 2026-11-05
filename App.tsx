import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import NavegacionComponent from './componentes/NavegacionComponent';
import ProviderEstudiante from './providers/ProviderEstudiante';

export default function App() {
  return (
    <ProviderEstudiante>
      <NavegacionComponent></NavegacionComponent>
    </ProviderEstudiante>
  );
}
