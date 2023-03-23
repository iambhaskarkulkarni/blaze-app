
import React from 'react';
import moment from 'moment';
import { Avatar, Button, Card, Text, DataTable } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {

  var date= moment().format("MM/DD/YYYY ");
  var tomDate = moment().add(1, 'days').calendar("MM/DD/YYYY ");
  var dftDate = moment().add(2, 'days').calendar("MM/DD/YYYY ");
  return (
    
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ScrollView vertical={true}>
          <Card>
              <Card.Title style={styles.buttonText} title="Purchase Order"/>
              <Card.Content>
              <View >
                  <Card  mode='contained'>
                    <Card.Content>
                      {/* <Text variant="titleLarge"></Text> */}
                      <Text style={styles.buttonText} variant="bodyMedium"> Palayoor Engineers (1106)</Text>
                      <View style={styles.vertical}>
                     <Text>2022-2023/173</Text>
                <Text>09-07-2022</Text>
                 </View>
                      <Text variant="bodyMedium">GST: 9450.00</Text>
                      <Text variant="bodyMedium"> Grand Total: 123902.0</Text>
                    
                     
                    </Card.Content>
                  </Card>
                   <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">20080007 BI-DD-Diamond Dresser 8x100-SP</Text>
                        <Text style={styles.buttonText} variant="bodyMedium">4.0 Nos</Text>
                         <View style={styles.vertical}>
                     
                <Text>Unit Price:1800 INR</Text>
                <Text>Delivery Date:22-03-2022</Text>
                 </View>
      </Card.Content>
                  </Card>
                  <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">41050229 SLIDE & MAIN BRACKET</Text>
                        <Text style={styles.buttonText} variant="bodyMedium">4.0 Nos</Text>
                        <View style={styles.vertical}>
                <Text>Unit Price:2400 INR</Text>
                <Text>Delivery Date:30-07-2022</Text>
                 </View>
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
    marginTop: 3,
  
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

