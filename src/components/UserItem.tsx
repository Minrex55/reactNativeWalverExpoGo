import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


interface Props {
    user: any
}

const UserItem = ({user}: Props) => {
    const dateStr = user.creadoEn ?? user.createdAt ?? '';
    return (
        <View style = {styles.card}>  
            <Text style = {styles.name}>{user.name}</Text>
            <Text>{user.email}</Text>
            {dateStr ? <Text style = {styles.date}>{new Date(dateStr).toLocaleString()}</Text> : null}
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