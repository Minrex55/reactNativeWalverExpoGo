import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


interface Props {
    user: any
    onEdit: () => void
    onDelete: () => void
}

const UserItem = ({user, onEdit, onDelete}: Props) => {
    const dateStr = user.creadoEn ?? user.createdAt ?? '';
    return (
        <View style = {styles.card}>  
            <Text style = {styles.name}>{user.nombre}</Text>
            <Text>{user.email}</Text>
            {dateStr ? <Text style = {styles.date}>{new Date(dateStr).toLocaleString()}</Text> : null} 
            <View>
                <Button title="Editar" onPress={onEdit} />
                <Button title="Eliminar" color='red' onPress={onDelete} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 12,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
    },
    name: {
        color: '#555',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    date: {
        fontStyle: 'italic',
        color: '#555',
        marginTop: 4,
    },
})

export default UserItem;