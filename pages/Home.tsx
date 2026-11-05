import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useContextEstudiante } from '../providers/ProviderEstudiante'
import { Estudiante } from '../modelos/Estudiante'
import ListaEstudiante from './ListaEstudiante'

export default function Home() {
    const { estudianteLista, agregarEstudiante } = useContextEstudiante()

    const [nombre, setNombre] = useState('')

    function agregar() {
        const nombreEstudiante = nombre.trim()
        if (!nombreEstudiante) {
            Alert.alert('Nombre requerido', 'Ingresa el nombre del estudiante.')
            return
        }

        const siguienteId = estudianteLista.reduce(
            (mayorId, estudiante) => Math.max(mayorId, estudiante.id),
            0,
        ) + 1
        const estudiante: Estudiante = {
            id: siguienteId,
            nombre: nombreEstudiante,
        }

        agregarEstudiante(estudiante)
        setNombre('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agregar estudiante</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese el nombre del estudiante"
                value={nombre}
                onChangeText={setNombre}
                onSubmitEditing={agregar}
                returnKeyType="done"
            />
            <Button title="Guardar" onPress={agregar} />
            <ListaEstudiante />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 16,
    },
    input: {
        borderColor: '#888',
        borderRadius: 6,
        borderWidth: 1,
        margin: 16,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
})