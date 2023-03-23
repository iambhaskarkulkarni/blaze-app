import React from 'react';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {

  const navigation = useNavigation();

  var date= moment().format("MM/DD/YYYY ");
  var tomDate = moment().add(1, 'days').calendar("MM/DD/YYYY ");
  var dftDate = moment().add(2, 'days').calendar("MM/DD/YYYY ");

  const onPress = (e) => {
    navigation.navigate('DispalyScreen')
    console.log("ONCLICK HANDLER CLICKED");
    console.log(e);
  }

  return (
    
    <SafeAreaView style={{flex: 1}}>
    
      <View style={styles.container}>
        <ScrollView vertical ={true}>
          
 
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => onPress("test")}
          >
            <Text style={styles.buttonText}
            >
            PR</Text>
          
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Approve PR No. 2022-2023/1{'\n'}
          {date}</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
          <Text style={styles.buttonText}>
            PR</Text>
             <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Approve RD40SFN(SPL)(BR)-28.0 {'\n'}
            {tomDate}
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={onPress}
          >
           <Text style={styles.buttonText}>
            NP</Text>
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Approve RDO52-11.0 (70017492){'\n'}
            {dftDate}
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
           <Text style={styles.buttonText}>
            EM</Text>
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Approve COOLANT CONCENTRATE DCA 15L(41050263) {'\n'}
            {date}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
       <Text style={styles.buttonText}>
            NP</Text>
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Update Commercial RDO52-10.0 (70017491){'\n'}
            {date}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
          <Text style={styles.buttonText}>
            SP</Text>
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Approve SERVICE & RETURN FOR NAKAMURA TMC{'\n'} 
           35X SERVO DRIVE(50010166){'\n'}
            {tomDate}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
          <Text style={styles.buttonText}>
            PO</Text>
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Dispatch PO No. 2022-2023/408{'\n'}
            {dftDate}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
         <Text style={styles.buttonText}>
            IS</Text>
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Approve REWINDING & RETURN FOR  INDUCITON MOTOR 0.37,{'\n'} 
          KW RPM-1380,MAKE SIMENS 3 PH(50010168){'\n'}
            {tomDate}
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
         <Text style={styles.buttonText}>
            BP</Text>
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Submit EUGEN FAHRION GmbH & Co. (1002){'\n'}
            {date}
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
         <Text style={styles.buttonText}>
            BD</Text>
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
          Start Breakdown No. BM/2021-2022/2 {'\n'}EQ-SHIGIYA-"G-20 ND"-"380  VOLTS"-"50 HZ" - RPT/G-441'{'\n'}
            {
              date
            }
          </Text>
        </TouchableOpacity>

        </ScrollView>
      
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // margin: 1,
    marginTop: 1,
    padding: 10,
    backgroundColor:'#bcdeeb'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    flex:1,
    backgroundColor: '#f8f8ff',
    borderWidth:1,
    borderColor: '#fff',
    height: 80,
    borderRadius: 20,
    margin: 5,
  
  },
  

  buttonTextStyle: {
    color:'#000000',
    felx:1,
    felxWrap:'wrap',
    marginBottom: 4,
    marginLeft: 20,
  },
  dateText: {
    color:'#404040',
    felx:1,
    felxWrap:'wrap',
    marginBottom: 4,
    textAlign:'left'
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#bcdeeb',
    width: 1,
    height: 40,

  },
  buttonText:{
    padding:10,
    margin:10,
    height: 50,
    width:50,
    borderRadius: 50,
    textAlign: 'center',
    resizeMode: 'stretch',
    backgroundColor:'#4682b4',
    color:'#ffffff',
    fontWeight:'bold'
    
  }

});

export default App;


