import React, {useState} from "react"
import { View, TextInput, Button, StyleSheet, Alert } from "react-native"
import { createUser } from "../services/userService"

const CreateUserScreen = ({navigation} : any) => {
    const[nombre, setNombre] = useState('')
    const[email, setEmail] = useState('')

    const handleCreate = async () => {
    try { await createUser({nombre, email})
        Alert.alert('Exito', 'Usuario creado')
        navigation.goBack()
    }catch (error) {
        Alert.alert('Error', 'No se pudo crear el usuario')
        console.error(error)
    }
    }

    return(
       <View style={styles.container}>
           <TextInput style={styles.Input}
           placeholder="Nombre"
           value={nombre}
           onChangeText={setNombre}
           />   
           <TextInput style={styles.Input}
           placeholder="Email"
           value={email}
           onChangeText={setEmail}
           keyboardType="email-address"
           />   
           <Button
           title="Crear Usuario"
           onPress={handleCreate}
           />  
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

    Input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 12,
        borderRadius: 6,
    }
});
export default CreateUserScreen