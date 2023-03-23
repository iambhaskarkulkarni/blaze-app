import React from 'react';
import moment from 'moment';
import { Avatar, Button, Card, Text, DataTable, Divider } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import RowComponent from '../components/ui/RowComponent';

const App = () => {
 
  var date= moment().format("MM/DD/YYYY ");
  var tomDate = moment().add(1, 'days').calendar("MM/DD/YYYY ");
  var dftDate = moment().add(2, 'days').calendar("MM/DD/YYYY ");
  return (
    
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ScrollView vertical={true}>
          <Card>
              <Card.Title style={styles.buttonText} title="Purchase Request"/>
              <Card.Content>
                <View >
                <Divider />
                <RowComponent item1="2022-2023/442" item2="13-Mar-2023" />
                <RowComponent item1="PR Type : Material" item2="Department : IT" />
                <RowComponent item1="Requested By: Admin" item2="" />
                <Divider />
                   <Card style={styles.prItems}>
                      <Card.Content>
                          <Text  style={styles.buttonText} variant="bodyMedium">10010005</Text>
                          <Text style={styles.buttonText} variant="bodyMedium">BD-RD-55CR3-18.0mm-3000mm-BR</Text>
                          <Divider />
                          <RowComponent item1="Req.Qty : 2,000.00 kgs" item2="13-Mar-2023" />
                          <RowComponent item1="Pipe Line.Qty : 0.0" item2="Material : 3,130.00" />
                          <RowComponent item1="Required On : 13-Mar-2023" item2="" />
                      </Card.Content>
                  </Card>
                 
                </View>
               
              </Card.Content>
      
              <Card.Actions>
                <Button>Reject</Button>
                <Button>Approve</Button>
              </Card.Actions>
            </Card>

        </ScrollView>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    marginLeft: 10,
  },
  columnContainer: {
    margin: 5,
    width: '50%',
  },
  container: {
    flex: 1,
    marginTop: 1,
    padding: 0,
    backgroundColor:'#bcdeeb'
  },
  buttonText:{
    color:'#000000',
    fontWeight:'bold',
    marignBottom:4,
    marginLeft: 10,
    flexWrap:'wrap-reverse'
  },
  buttonTextSpace:{
    color:'#000000',
    marignBottom:4,
    justifyContent: 'space-between'
  },
  prItems: {
    marginTop: 8,
  
  },
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  },
  vertical: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Alertbutton:{
    backgroundColor: '#4ba37b',
      width: 100,
      borderRadius: 50,
      alignItems: 'center',
      marginTop: 50,
      marginLeft:10,
      height: 30,
      
   
  }

});

export default App;