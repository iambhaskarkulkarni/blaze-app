import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const RowComponent = ({item1, item2}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
       <Text>{ item1}</Text>
      </View>
      <View style={styles.item}>
         <Text>{item2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  item: {
    padding: 5,
  },
});

export default RowComponent;
