
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
              <Card.Title style={styles.buttonText} title="Commercials"/>
              <Card.Content>
              <View >
                  <Card  mode='contained'>
                    <Card.Content>
                    
                      <Text style={styles.buttonText} variant="bodyMedium"> MRIR Details</Text>
                      <View style={styles.vertical}>
                     <Text>2022-2023/431</Text>
                <Text>17-02-2023</Text>
                 </View>
                    
                     <Text>Supplier Name : Hemant Tools Pvt.LTd.,</Text>
                     <Text>MRIR No : M2200572</Text>
                     <Text>MRIR Date : 15-03-2023</Text>
                     <Text>Recevied Date : 15-03-2023</Text>
                     <Text>Supplier Invoice No. : N-36514</Text>
                     <Text>Supplier Invoice Date : 13-03-2023</Text>
             
                    </Card.Content>
                  </Card>
                   <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">BI-MI-"VCMT 160408 PS A</Text>
                        <Text style={styles.buttonText} variant="bodyMedium">Nos</Text>
                        <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Quantity</Text>
                        <Text  variant="bodyMedium">Recevied : 10</Text>
                        <Text  variant="bodyMedium">Accepted : 0</Text>
                        <Text  variant="bodyMedium">Rejected : 0</Text>
                     </Card.Content>
                  </Card>
                  <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Unit Price (INR) </Text>
                        <Text  variant="bodyMedium">PO : 462.0</Text>
                        <Text  variant="bodyMedium">Inv : 462.0</Text>
                        <Text  variant="bodyMedium">Discount% : 5.0 </Text>
                     </Card.Content>
                  </Card>
                  <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Landed Price</Text>
                        <Text  variant="bodyMedium">INR :</Text>
                        <Text  variant="bodyMedium">Base UOM : Nos</Text>
                     </Card.Content>
                  </Card>
                 
      </Card.Content>
                  </Card>
                  <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Summary</Text>
                 <View style={styles.vertical}>
                <Text style={styles.buttonTextSpace}>Discount INR :</Text>
                <Text style={styles.buttonTextSpace}>Packing & Forward INR:</Text>
                 </View>
                 <View style={styles.vertical}>
                <Text style={styles.buttonTextSpace}>Freight & Insurance INR :</Text>
                <Text style={styles.buttonTextSpace}>Total Payable INR :</Text>
                 </View>
                 <View style={styles.vertical}>
                <Text style={styles.buttonTextSpace}>Other Charges INR :</Text>
                <Text >Remarks :</Text>
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
    justifyContent: 'space-between',
    textAlign : 'justify'
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