import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import ListaEstudiante from '../pages/ListaEstudiante'
import Home from '../pages/Home'

export default function NavegacionComponent() {
    const Tab = createBottomTabNavigator()
    
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen component={Home} name='Home'></Tab.Screen>
        <Tab.Screen component={ListaEstudiante} name='Lista Estudiante'></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}