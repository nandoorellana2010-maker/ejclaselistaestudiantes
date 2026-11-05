import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContextEstudiante } from '../providers/ProviderEstudiante'

export default function ListaEstudiante() {
    const { estudianteLista } = useContextEstudiante()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estudiantes registrados</Text>
            <FlatList
                data={estudianteLista}
                keyExtractor={estudiante => estudiante.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.student}>
                        <Text>Id: {item.id}</Text>
                        <Text>Nombre: {item.nombre}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    student: {
        borderBottomColor: '#ddd',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical: 10,
    },
})