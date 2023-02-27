import React, { Component } from 'react';
import { StyleSheet, View ,Text, TouchableOpacity , Alert} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import moment from 'moment';

export default class ExampleOne extends Component {
   

  constructor(props) {
    super(props);
    var date= moment().format("MM/DD/YYYY ");
    var tomDate = moment().add(1, 'days').calendar("MM/DD/YYYY ");
    var dftDate = moment().add(2, 'days').calendar("MM/DD/YYYY ");
    this.state = {
      tableHead: ['Order Status', 'Description', 'Due Date','submit'],
      tableData: [
        ['New Purchase Request', 'Approve PR No. 2022-2023/1', date,'button' 
],
        ['Price Revision',' Approve RD40SFN(SPL)(BR)-28.0' , date,'n'],
        ['New Product', 'Approve RDO52-11.0 (70017492)', date,'n'],
        ['New Equipment Master', 'Approve COOLANT CONCENTRATE DCA 15L(41050263)', date,'n'],
        ['New Product', 'Update Commercial RDO52-10.0 (70017491)', tomDate,'n'],
        ['Item Supplier Price', 'Approve SERVICE & RETURN FOR NAKAMURA TMC 35X SERVO DRIVE(50010166)', date,'n'],
        ['Purchase Order Workflow', ' Dispatch PO No. 2022-2023/408', dftDate,'n'],
        ['Item Supplier', 'Approve REWINDING & RETURN FOR INDUCITON MOTOR 0.37, KW RPM-1380,MAKE SIMENS 3 PH(50010168)', tomDate,'n'],
        ['Bulk Price Update', ' Submit EUGEN FAHRION GmbH & Co. (1002)',tomDate,'n'],
        ['BreakDown Maintenance', ' Start Breakdown No. BM/2021-2022/2 EQ-SHIGIYA-"G-20 ND"-"380 VOLTS"-"50 HZ" - RPT/G-441', dftDate,'n']
      ]
    }
  }
  
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
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

