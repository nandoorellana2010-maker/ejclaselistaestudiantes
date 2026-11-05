import NavegacionComponent from './componentes/NavegacionComponent';
import ProviderEstudiante from './providers/ProviderEstudiante';

export default function App() {
  return (
    <ProviderEstudiante>
      <NavegacionComponent></NavegacionComponent>
    </ProviderEstudiante>
  );
}
