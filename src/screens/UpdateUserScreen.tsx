import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';
import { getUserById, updateUser } from '../services/userService';

const UpdateUserScreen = ({route, navigation}:any) => {
    const { id } = route.params;
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const load = async () => {
            try {
                const u = await getUserById(id);
                if (u) {
                    setNombre(u.nombre);
                    setEmail(u.email);
                }
            } catch (e) {
                console.error(e);
            }
        }
        load();
    },[id])

    const handleUpdate = async () => {
        try {
            await updateUser(id, { nombre, email });
            Alert.alert('Éxito', 'Usuario actualizado correctamente');
            navigation.goBack();
        } catch (e) {
            Alert.alert('Error', 'No se pudo actualizar el usuario');
            console.error(e);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={nombre} onChangeText={setNombre} placeholder="Nombre" />
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" keyboardType='email-address' />
            <Button title="Actualizar" onPress={handleUpdate} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCC',
        padding: 10,
        marginBottom: 12,
        borderRadius: 6,
    },
});
export default UpdateUserScreen;
