import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';
import { getUserById, updateUser } from '../services/userService';

const UpdateUserScreen = ({route, navigation}:any) => {
    const { Id } = route.params;
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');


    return (
        <View>
            
        </View>
    );
}

export default UpdateUserScreen;
