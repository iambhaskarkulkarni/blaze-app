
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
              <Card.Title style={styles.buttonText} title="Material"/>
              <Card.Content>
              <View >
                  <Card  mode='contained'>
                    <Card.Content>
                      <Text style={styles.buttonText} variant="bodyMedium">10010001</Text>
                      <Text style={styles.buttonText} variant="bodyMedium">BD-RD-SUP9-12.5in-3000in-BR</Text>
                       <Text variant="bodyMedium">SUP9 Rod 12.5 in dia 3000 in length bright grade</Text>
                       <View style={styles.vertical}>
                       <Text variant="bodyMedium" >ABC Classification: A</Text>
                       <Text variant="bodyMedium">UOM: Kgs </Text>
                       </View>
                       <View style={styles.vertical}>
                       <Text variant="bodyMedium">Enable Inventory: true</Text>
                       <Text variant="bodyMedium">Sub Group: NA</Text></View>
                       <View style={styles.vertical}>
                       <Text variant="bodyMedium">Shelf Life: 0</Text>
                       <Text variant="bodyMedium">Assets: False</Text>
                    </View>
                     
                    </Card.Content>
                  </Card>
                   <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Material Catalog Details</Text>
                         <View style={styles.vertical}>
                      <Text>Grade: SUP9  </Text>
                       <Text>Length: 3000  in</Text>
                 </View>
                 <View style={styles.vertical}>
                      <Text>Dimentions: 12.5   in </Text>
                       <Text>Finish: BR </Text>
                 </View>
                 
                  </Card.Content>
                  </Card>
                  <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Material Identifier</Text>
                       
                        <View style={styles.vertical}>
                <Text>Issue Identifier: No</Text>
                <Text>Recive Identifier: No</Text>
                 </View>
                </Card.Content>
                    </Card>
                    <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Technical References</Text>
                       
                        <View style={styles.vertical}>
                <Text>Hsn Code: 72151000</Text>
                <Text>Drawing Id: A 0000 012</Text>
                 </View>
                 <View style={styles.vertical}>
                <Text>Drawing Revision: b</Text>
               
                 </View>
                 <Text>Commodity Name : BARS and RODS of IRON STEEL</Text>
                 <Text>Specification ID : Spring Steel,Hot Rolled; Spherodized Annealed; Peeled & Ground Rods – h9 tolerance</Text>
                </Card.Content>
                    </Card>
                    <Card style={styles.prItems}>
                      <Card.Content>
                        <Text  style={styles.buttonText} variant="bodyMedium">Quantity Details</Text>
                        <Text variant="bodyMedium">Store : Bonded Warehouse,RM Sub-store </Text>
                        <Text variant="bodyMedium">Inventory Strategy : MTO </Text>
                        <Text variant="bodyMedium">Issue Rule per UOM : Nos </Text>
                        <Text variant="bodyMedium">Issue Rule Conv.Factor : 1 </Text>
                        <Text variant="bodyMedium">Alternate UOM : Nos</Text>
                        <Text variant="bodyMedium">Alt UOM Conv Factor : 0.344827586 </Text>
                        <Text variant="bodyMedium">Use Alt Uom in Indent : Yes </Text>
                        <Text variant="bodyMedium">Receving Serialization Required : No </Text>
                        <Text variant="bodyMedium">Issue Serialization Required : No</Text>
                        <Text variant="bodyMedium">Shelf Allocation By Grn : No</Text>
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
   justifyContent: 'space-between',
   textAlign:'left'
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

