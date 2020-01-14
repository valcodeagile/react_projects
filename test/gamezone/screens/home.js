import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { gStyles } from '../styles/global';

export default function Home() {
  return (
    <View style={gStyles.container}>
      <Text style={gStyles.titleText}>Home Screen</Text>
    </View>
  );
}