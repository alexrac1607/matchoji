import { StatusBar } from "expo-status-bar";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MainMenuScreen from "./src/screens/MainMenuScreen/MainMenuScreen";
import ModeScreen from "./src/screens/ModeScreen/ModeScreen";
import GameScreen from "./src/screens/GameScreen/GameScreen";
import { GameContext } from "./src/context/ContextProvider";
import { ContextProvider } from "./src/context/ContextProvider";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainMenuScreen} />
          <Stack.Screen name="ModeScreen" component={ModeScreen}></Stack.Screen>
          <Stack.Screen name="GameScreen" component={GameScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
