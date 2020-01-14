import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';
import SandBox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((abc) => {
      return abc.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((efg) => {
        return [
          {text:text, key: Math.random().toString() },
          ...efg //spread operator
        ]
      })
    }else{
      Alert.alert('OOPs!','todos must be over 3 chars long', [
        {text: 'understood', onPress:()=>console.log('alert closed')}
      ])
    }
    
  }

  return (
    // <SandBox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex:1,
    padding: 40,
    backgroundColor:'pink',
  },
  list: {
    flex:1,
    marginTop: 20,
    backgroundColor:'yellow'
  },
});