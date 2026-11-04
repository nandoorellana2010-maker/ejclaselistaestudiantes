import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Estudiantes } from '../modelos/Estudiante'
import ListaEstudiantesComponent from './ListaEstudiantesComponent'

export default function RegistroEstudiantesComponent() {

    const [listaEstudiantes, setListaEstudiantes] = useState<Estudiantes[]>([])

    const [nombre, setNombre] = useState<string>('')

    function guardarEstudiante() {
        let estudiante: Estudiantes = {
            id: listaEstudiantes.length + 1,
            nombre: nombre
        }    
        setListaEstudiantes([...listaEstudiantes, estudiante])
        Alert.alert('Estudiante registrado')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Estudiantes</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el nombre del estudiante"
        onChangeText={setNombre}
        value={nombre}
      />
      <Button title="Guardar" onPress={guardarEstudiante} />
      <ListaEstudiantesComponent lista={listaEstudiantes} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },
  input: {
    borderColor: '#888',
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
  },
});