import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' }, 
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);

  const presshandler = (id) =>{
    console.log(id);
    setPeople((prevPeople) => {
        return prevPeople.filter(person => person.id != id)
    })
  }
  return (
    <View style={styles.container}>

      <FlatList
      numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => presshandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>  
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))}
      </ScrollView>  */}
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    // flex: 1,
    backgroundColor: 'pink',
    marginHorizontal: 10,
    marginTop:24,
    marginTop: 24,
    padding:30,
    fontSize: 24,
  },
});