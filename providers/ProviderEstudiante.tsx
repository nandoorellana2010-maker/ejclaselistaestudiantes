import { View, Text, Alert } from 'react-native'
import React, { useContext } from 'react'
import { Plantilla } from './Plantilla'
import { Estudiante } from '../modelos/Estudiante'
import { useState } from 'react'
import { ContextEstudiante } from '../contexts/ContextEstudiante'


export default function ProviderEstudiante(prop: Plantilla) {

    const [estudianteLista, setEstudianteLista] = useState<Estudiante[]>([])

    const [nombre, setNombre] = useState<string>('')

    function agregarEstudiante(estudiante: Estudiante) {
        setEstudianteLista([...estudianteLista, estudiante])
        Alert.alert('Estudiante registrado')        
        }    

        return (
          <ContextEstudiante.Provider value={{estudianteLista, agregarEstudiante}}>
            {prop.children}
          </ContextEstudiante.Provider>
        )
    }
    
    export const useContextEstudiante = () => {
        return useContext(ContextEstudiante)
    }
