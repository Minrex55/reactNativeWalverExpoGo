import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from "./src/navigation/StackNavigator"
import HomeScreen from "./src/screens/HomeScreen"


const App = () => {
  return(
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App