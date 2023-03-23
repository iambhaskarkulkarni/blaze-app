import { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import IconButton from './components/ui/IconButton';
import SaleScreen from './screens/SaleScreen';
import FloatButton from './components/ui/FloatButton';
import TestScreen from './screens/TestScreen';
import TestScreen2 from './screens/TestScreen2';
import DispalyScreen from './screens/DispalyScreen';
import MaterialReq from './screens/MaterialReq';
import Supplier from './screens/Supplier';
import Commision from './screens/Commision';




const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  const authCtx = useContext(AuthContext);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary800 },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: Colors.primary800 },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#3c8dbc',
        drawerActiveBackgroundColor: '#ffffff',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={WelcomeScreen}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
          headerRight: ({ tintColor }) => (
            <><IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout} />
         </>
          ),
        }}
      />

      <Drawer.Screen
        name="Purchase Request"
        component={SaleScreen}
        options={{
          drawerIcon:({color,size})=>(
            <Ionicons name="basket" color={color} size={size}/>
          ),
          headerRight:({ tintColor }) => (
            <><IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout} />
            </> 
            ),
        }}
      />

      <Drawer.Screen
        name="Sales"
        component={SaleScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
              ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
             ),
        footerRight:({tintColor})=>(
            <FloatButton
            alignSelf='flex-end'

                icon="star"
                color={tintColor}
                size={55}
                onPress={authCtx.logout} />
                ), 
        }}
      />
       <Drawer.Screen
        name="Maintenance"
        component={Supplier}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="checkbox" color={color} size={size} />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
 <Drawer.Screen
        name="Production"
        component={Commision}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="server" color={color} size={size} />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
 <Drawer.Screen
        name="Request Approval"
        component={SaleScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
 <Drawer.Screen
        name="Inspection"
        component={SaleScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="open" color={color} size={size} />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
 <Drawer.Screen
        name="Master"
        component={SaleScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="school" color={color} size={size} />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SaleScreen}
        options={{
          drawerIcon:({color,size})=>(
            <Ionicons name="settings" color={color} size={size}/>
          ),
          headerRight:({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Drawer.Navigator>
    
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary800 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} 
      options={{
        headerShown: false,
      }} />
      
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
    return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
      >
      <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
        />
        
      <Stack.Screen
          title="Title"
        name="Test"
        component={TestScreen}
        />
      
      <Stack.Screen
          title="Task"
        name="Test2"
        component={TestScreen2}
      />
      <Stack.Screen
          title="Title"
        name="Order Status"
        component= {MaterialReq}
      />
      <Stack.Screen
          title="Task"
        name="DispalyScreen"
        component={DispalyScreen}
      />
       </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  

  return <Navigation />;
}

export default function App() {
  
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}