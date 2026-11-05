import { View, Text } from 'react-native'
import React from 'react'
import { useContextEstudiante } from '../providers/ProviderEstudiante'
import { Estudiante } from '../modelos/Estudiante'

export default function ListaEstudiante() {
    const {estudianteLista}=useContextEstudiante()

  return (
    <View>
      <Text>ListaEstudiante</Text>
      {
        estudianteLista.map((estudiante : Estudiante) => (
            <View key={estudiante.id}>

                <text>Id Estudiante {estudiante.id}</text>
                <text>Nombre Estudiante {estudiante.nombre}</text>
            </View>
        ))
      }
    </View>
  )
}