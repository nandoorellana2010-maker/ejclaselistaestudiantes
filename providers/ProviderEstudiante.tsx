import { Alert } from 'react-native'
import React, { useContext } from 'react'
import { Plantilla } from './Plantilla'
import { Estudiante } from '../modelos/Estudiante'
import { useState } from 'react'
import { ContextEstudiante } from '../contexts/ContextEstudiante'


const estudiantesIniciales: Estudiante[] = [
    { id: 1, nombre: 'Emerson Orellana' },
    { id: 2, nombre: 'Nicolle Guevara' },
    { id: 3, nombre: 'Lucy Romero' },
    { id: 4, nombre: 'Sarly Nixon' },
    { id: 5, nombre: 'Aleck Fong' },
    { id: 6, nombre: 'Carlos Lopez' },
    { id: 7, nombre: 'Lesby Soreano' },
    { id: 8, nombre: 'Fanny Figueroa' },
    { id: 9, nombre: 'Rita Gimenez' },
    { id: 10, nombre: 'Laura Flores' },
]
export default function ProviderEstudiante(prop: Plantilla) {

    const [estudianteLista, setEstudianteLista] = useState<Estudiante[]>(estudiantesIniciales)

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
