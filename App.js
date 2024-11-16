import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Log from './components/Login';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
// Create a stack navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Screen Components */}
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login to Miskat-Mart' }} // Login screen
        />
        <Stack.Screen 
          name="ProductList" 
          component={ProductList} 
          options={{ title: 'Welcome to Miskat-Mart' }} 
        />
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetails} 
          options={{ title: 'Product Details' }}
        />
        <Stack.Screen 
          name="Cart" 
          component={Cart} 
          options={{ title: 'Your Cart' }}
        />
        <Stack.Screen 
          name="Checkout" 
          component={Checkout} 
          options={{ title: 'Checkout' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
