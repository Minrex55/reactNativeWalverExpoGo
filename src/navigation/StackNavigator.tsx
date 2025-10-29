import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import UserListScreen from "../screens/UserListScreen";
import CreateUserScreen from "../screens/CreateUserScreen";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{title: 'Inicio'}}
            />
            <Stack.Screen 
            name="UserList"
            component={UserListScreen}
            options={{title: 'Lista de Usuarios'}}
            />
            <Stack.Screen
            name="CreateUser"
            component={CreateUserScreen}
            options={{title: 'Crear Usuario'}}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator