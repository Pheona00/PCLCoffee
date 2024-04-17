import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

import Landing from './.expo/Landing';
import Login from './.expo/Login';
import Registration from './.expo/Registration';
import AccountRecovery from './.expo/AccountRecovery';
import Home from './.expo/Home';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true); 
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
          <Stack.Screen name="Login">
            {props => <Login {...props} onAuthenticate={handleAuthentication} options={{ headerShown: false }} />}
          </Stack.Screen>
          <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
          <Stack.Screen name="AccountRecovery" component={AccountRecovery} options={{ headerShown: false }} />
          <Stack.Screen 
            name="Home"
            component={Home}
            initialParams={{ isAuthenticated: isAuthenticated }}
            options={{ 
              headerShown: false, 
              headerLeft: null 
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
