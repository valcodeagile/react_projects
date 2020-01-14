import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function SandBox() {
   return(
    <View style={styles.container}>
        <Text style={styles.boxOne}>one</Text>
        <Text style={styles.boxTwo}>two</Text>
        <Text style={styles.boxThree}>three</Text>
        <Text style={styles.boxFour}>four</Text>
    </View>
   )
  }

const styles = StyleSheet.create({
    container:{
        // flex: 1,//flexible component,down to bottom
        flexDirection: 'row',
        paddingTop: 40,
        backgroundColor: '#ddd',
        justifyContent: 'space-around',//how to display dofferent components  on the main axis
        alignItems:'flex-end',
    },
    boxOne:{
        flex: 2,
        backgroundColor: 'violet',
        padding:10,
    },
    boxTwo:{
        flex: 1,
        backgroundColor: 'gold',
        padding:20,
    },
    boxThree:{
        flex: 1,
        backgroundColor: 'coral',
        padding:30,
    },
    boxFour:{
        flex: 1,
        backgroundColor: 'skyblue',
        padding:40,
    },
});