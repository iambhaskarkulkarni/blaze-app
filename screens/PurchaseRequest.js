import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'item',
         },
         {
            id: 1,
            name: 'item count',
         },
         {
            id: 2,
            name: 'order',
         },
         {
            id: 3,
            name: 'task',
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#ffffff',
      alignItems: 'center',
   },
   text: {
      color: '#000000'
   }
})

