import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { ListaEstudiantes } from '../modelos/ListaEstudiantes'

export default function ListaEstudiantesComponent(props: ListaEstudiantes) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Estudiantes registrados</Text>
      <FlatList
        style={styles.list}
        data={props.lista}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.student}>Nombre: {item.nombre}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  list: {
    flex: 1,
  },
  student: {
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 12,
  },
});