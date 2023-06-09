import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MainMenuScreen from './src/screens/MainMenuScreen/MainMenuScreen'
import ModeScreen from './src/screens/ModeScreen/ModeScreen'
import GameScreen from './src/screens/GameScreen/GameScreen'
import { ContextProvider } from './src/context/ContextProvider'
import GameHeader from './src/components/GameHeader/GameHeader'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <ContextProvider>
      <NavigationContainer options={{ headerShown: false }}>
        <Stack.Navigator options={{ headerShown: false }}>
          <Stack.Screen name="Home" component={MainMenuScreen} />
          <Stack.Screen name="ModeScreen" component={ModeScreen}></Stack.Screen>
          <Stack.Screen
            options={{
              headerTransparent: true,
              headerTitle: () => <GameHeader></GameHeader>,
              headerStyle: {
                gap: 0,
              },
            }}
            name="GameScreen"
            component={GameScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  )
}
