import React, {useState, useEffect} from 'react';
import {StyleSheet, Platform, Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
// import the different screens
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Home from './components/Home';
import {GlobalContextProvider} from './contexts/GlobalContext';

// create our app's navigation stack
const Stack = createStackNavigator();

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <GlobalContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalContextProvider>
    );
  }

  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}

export default App;
