import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
//import {task} from 'react-native-dashboard-task.js';


const Icon = ({ icon, item, background }) => (
    <FontAwesome
        name={icon}
        size={40}
        color={
            item.iconColor || (!item.background || !background ? '#3498db' : '#fff')
        }
        style={item.styleIcon}
    />
    
);

const data = [
    {
        name: 'My Task',
        id:'myTask',
        background: '#778899',
        icon: (item, background) => Icon({ icon: 'star', item, background }),
    },
    {
        name: 'Item Supply',
        background: '#b71c1c',
        icon: (item, background) => Icon({ icon: 'star', item, background }),
    },
    {
        name: 'Order Status',
        background: '#ff8c00',
        icon: (item, background) => Icon({ icon: 'circle', item, background }),
    },
    {
        name: 'Pending Request',
        background: '#4caf50',
        icon: (item, background) => Icon({ icon: 'star', item, background }),
    },
    
];

export default function App() {

    const navigation = useNavigation();
    
    const card = ({ name }) => {
        console.log('Card: ' + name);
        if (name === 'My Task') {
            navigation.navigate('Test')
        } else if (name === 'Item Supply') {
            navigation.navigate('Test2')
        }
        
    }

    return (
        <View style={styles.container}>
            <Dashboard
                data={data}
                background={true}
                card={card}
                column={2}
                rippleColor={'#3498db'}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
});

