import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head}/>
          <Rows data={state.tableData} style={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});








/*import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
function TestScreen() {
    return (
        <Text style={styles.baseText}>
            <Text style={styles.titleText}>
               Title
                {'\n'}
                {'\n'}
            </Text>
            <Text numberOfLines={5}>body</Text>
        </Text>
    );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'sans-serif',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TestScreen;*/


/*function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'blue',
        contentStyle: { backgroundColor: Colors.primary500 },
      }}
    >
      <Stack.Screen name="Task View" component={test} 
      options={{
        headerShown:true
      }} />
      
    </Stack.Navigator>
  );
}
*/

