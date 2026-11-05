import { View, Text, TextInput, Button } from 'react-native'
const {estudianteLista, agregarEstudiante} = useContextEstudiante()

import React, { useContext, useEffect, useState } from 'react'
import { useContextEstudiante } from '../providers/ProviderEstudiante'
import { Estudiante } from '../modelos/Estudiante'

export default function Home() {
    const {estudianteLista, agregarEstudiante} = useContextEstudiante()

    const [nombre, setNombre]=useState('')

    function agregar(){
        let estudiante : Estudiante={
            id: estudianteLista.length + 1,
                nombre : nombre
        }
        agregarEstudiante(estudiante)
    }

    useEffect(()=>{
        console.log(estudianteLista)
    },[estudianteLista])

  return (
    <View>
      <Text>Agregar Estudiantes</Text>
      <TextInput placeholder='Ingrese el Nombre del Estudiante'
      value={nombre}
      onChangeText={setNombre}
      ></TextInput>
      
      <Button title='Guardar' onPress= {agregar}/>
    </View>
  )
}