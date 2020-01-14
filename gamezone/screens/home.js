import React, {useState} from 'react';
import { globalStyles, gStyles } from '../styles/global';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

export default function Home({navigation}){

    const [reviews, setReviews] = useState([
        {title: 'aaaaaaaaaaaa', rating:5, body:'lore, ipsum', key:'1'},
        {title: 'bbbbbbbbbbbb', rating:4, body:'lore, ipsum', key:'2'},
        {title: 'cccccccccccc', rating:3, body:'lore, ipsum', key:'3'},
    ]);

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
        // navigation.push('ReviewDetails');
    }
    return (
        <View style={styles.container}>
            <FlatList 
                data ={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={styles.titleText}
                        >{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        padding:24,
    },
    titleText:{
        fontFamily: 'nunito-bold',
        fontSize: 24,
    }
});