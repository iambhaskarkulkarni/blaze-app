
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
              <Card.Title style={styles.buttonText} title="Supplier"/>
              <Card.Content>
              <View >
                  <Card  mode='contained'>
                    <Card.Content>
                      {/* <Text variant="titleLarge"></Text> */}
                      <Text style={styles.buttonText} variant="bodyMedium"> XXXXXXXXXXE TOOLS & SPARES</Text>
                      <Text style={styles.buttonText} variant="bodyMedium"> 1003</Text>
                
                      <Text variant="bodyMedium">Supplier Type : Material Vendor</Text>
                      <Text variant="bodyMedium">PAN : AFHPA9761N</Text>
                      <Text variant="bodyMedium">GSTIN : 29XXXXXXXXXXXXX</Text>
                      <Text variant="bodyMedium">Tin No :</Text>
                      <Text variant="bodyMedium"> Web Site : </Text>
                      <Text variant="bodyMedium"> Transit Time :</Text>
                    
                     
                    </Card.Content>
                  </Card>
                   <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Other Information</Text>
                        <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Product Range:</Text>
                      </Card.Content></Card>
                        <Text>Company Email-Id:1003@dummy1.com</Text>
                         <View style={styles.vertical}>
                         <Text>Transpoter Name: NA</Text>
                 <Text>Currency:INR</Text>
                 </View>
                
                 <View style={styles.vertical}>
                         <Text>No of Decimal:</Text>
                 <Text>Certification:</Text>
                 </View>
                 <View style={styles.vertical}>
                         <Text>Last Audit Date:</Text>
                 <Text>Rounding Rule:</Text>
                 </View>
                 <View style={styles.vertical}>
                 <Text>ICE Expiry date:</Text>
                 </View>
                
      </Card.Content>
                  </Card>
                  <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Correspondence Address</Text>
                        <Text>Address:No 5 XXXXXXXXXXXXXXXXX</Text>
                        <View style={styles.vertical}>
                        <Text>State:Karnataka</Text>
                <Text>Country: India</Text>
                 </View>
                 <View style={styles.vertical}>
                        <Text>City:BeXXXXXXX</Text>
                <Text>Pin:560058</Text>
                 </View>
                 <View style={styles.vertical}>
                        <Text>Fax:</Text>
                <Text>Phone:</Text>
                 </View>
              </Card.Content></Card>
              <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Factory Addres</Text>
                        <Text>Address:</Text>
                        <View style={styles.vertical}>
                        <Text>State:</Text>
                <Text>Country: </Text>
                 </View>
                 <View style={styles.vertical}>
                        <Text>City:</Text>
                <Text>Pin:</Text>
                 </View>
                 <View style={styles.vertical}>
                        <Text>Fax:</Text>
                <Text>Phone:</Text>
                 </View>
              </Card.Content></Card>
              <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Terms And Conditions</Text>
                        <Text variant="bodyMedium">Payment Terms : Advance  100% </Text>
                        <Text variant="bodyMedium">Credit In Days : 0 </Text>
                        <Text variant="bodyMedium">Allowed Advance Delivery(Days) : 0 </Text>
                        <Text variant="bodyMedium">Payment Mode : CHEQUE  </Text>
                        <Text variant="bodyMedium">Inspection : At our Works</Text>
                        <Text variant="bodyMedium">Delivery Location : Door to Door </Text>
                        <Text variant="bodyMedium">Warranty : 6 Months from the date of Supply </Text>
                        <Text variant="bodyMedium">Replacement Rule : NA </Text>
                        <Text variant="bodyMedium">Freight Terms : To our Account</Text>
                        <Text variant="bodyMedium">Packing & Forwarding : NA</Text>
                        <Text variant="bodyMedium">Packing Charges(%) : 0.0</Text>
                        <Text variant="bodyMedium">Commision & Training :NA</Text>
                        <Text variant="bodyMedium">Insurance Included : To our Account</Text>
                        <Text variant="bodyMedium">Test Report Needed : No</Text>
                        <Text variant="bodyMedium">TCS Applicable : No</Text>
                        <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Special Instruction :</Text>
                        <Text>Tax Invoice should accompany with the supplies,failing which, material will not be accepted.</Text>
              
               
              </Card.Content></Card>
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