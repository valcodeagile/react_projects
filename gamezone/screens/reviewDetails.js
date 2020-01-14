import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { gStyles } from '../styles/global';

export default function ReviewDetails({navigation}){

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={gStyles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
            <Button title="back to home screen" onPress={pressHandler}/>
        </View>
    );
}