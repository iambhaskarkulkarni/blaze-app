//Image Icon Inside the React Native Button
//https://aboutreact.com/image-icon-inside-the-react-native-button/

//import React in our code
import React from 'react';
import moment from 'moment';
import { Avatar, Button, Card, Text, DataTable } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

//import {blaze} from './assets/blaze.png';
//import { logo } from './assets/images/logo.png';


//import all the components we are going to use
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
        <ScrollView vertical={true}>
          <Card>
              <Card.Title title="PR Ammendements"/>
              <Card.Content>
              <View >
                  <Card  mode='contained'>
                    <Card.Content>
                      {/* <Text variant="titleLarge"></Text> */}
                      <Text variant="bodyMedium">Supplier : name</Text>
                      <Text variant="bodyMedium">PO Date : name</Text>
                      <Text variant="bodyMedium">PAN : name</Text>
                      <Text variant="bodyMedium">TIN : name</Text>
                    </Card.Content>
                  </Card>
                   <Card style={styles.prItems}>
                      <Card.Content>
                        <Text variant="bodyMedium">Item : item name</Text>
                        <Text variant="bodyMedium">Qty : 10</Text>
                        <Text variant="bodyMedium">price : 10</Text>
                      </Card.Content>
                  </Card>
                  <Card style={styles.prItems}>
                      <Card.Content>
                        <Text variant="bodyMedium">Item : item name</Text>
                        <Text variant="bodyMedium">Qty : 10</Text>
                        <Text variant="bodyMedium">price : 10</Text>
                      </Card.Content>
                    </Card>
                </View>
               
              </Card.Content>
              {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Approve</Button>
              </Card.Actions>
            </Card>

        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // margin: 1,
    marginTop: 1,
    padding: 0,
    backgroundColor:'#bcdeeb'
  },
  prItems: {
    marginTop: 3,
    // backgroundColor: 'red',
  }

});

export default App;