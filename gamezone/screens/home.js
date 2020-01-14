import React from 'react';
import { globalStyles } from '../styles/global';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Home({navigation}){


    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
        // navigation.push('ReviewDetails');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
            <Button title='go to review dets' onPress={pressHandler}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        padding:24,
    },
    titleText:{
        fontFamily: 'nunito-bold',
        fontSize: 18,
    }
});