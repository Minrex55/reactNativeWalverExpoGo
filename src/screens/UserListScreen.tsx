import React, {useState, useEffect} from "react";
import {View, FlatList, StyleSheet, Alert, RefreshControl} from 'react-native'
import {getUsers} from '../services/userService'
import UserItem from "../components/UserItem";

const UserListScreen = ({navigation}: any) => {
    const [users, setUsers] = useState<any[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    const load = async () => {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (error) {
            Alert.alert('Error', 'No se pudieron cargar los usuarios');
        }
    } 

    useEffect(() => {
        const unsub = navigation.addListener('focus', load);
        return unsub;
    },[navigation])


    return(
        <View style={styles.container}>  
            <FlatList
            data={users}
            keyExtractor={it => it.id.toString()}
            renderItem={({item}) => <UserItem user={item} />}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => {setRefreshing(true); await load(); setRefreshing(false);}} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    }
})

export default UserListScreen
