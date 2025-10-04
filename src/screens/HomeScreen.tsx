import React from "react";
import {} from 'react-native'
import {View, Text, Button, StyleSheet} from 'react-native'

const HomeScreen = ({navigation} : any) => {
    return(
        <View style = {styles.container}>
            <Text style={styles.titulo}>Gestión de usuarios</Text>
            <View style={styles.botonContenedor}>
                <Button title="Ver usuarios" onPress={() => navigation.navigate('UserList')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 70,
    },
    botonContenedor: {
        width: '100%',
        marginVertical: 40,
    },
});

export default HomeScreen