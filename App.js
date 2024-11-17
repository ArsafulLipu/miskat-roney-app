import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing all the components
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import PaymentSelectionScreen from './components/PaymentSelectionScreen'; // Import the Payment Selection Screen
import DummyPaymentScreen from './components/DummyPaymentScreen'; // Import the Dummy Payment Screen
import Logout from './components/Logout';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Screen Components */}
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login to Miskat-Mart' }} 
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
        {/* Payment Selection Screen */}
        <Stack.Screen 
          name="PaymentSelection" 
          component={PaymentSelectionScreen} 
          options={{ title: 'Select Payment Method' }} 
        />
        {/* Dummy Payment Screen */}
        <Stack.Screen 
          name="DummyPayment" 
          component={DummyPaymentScreen} 
          options={{ title: 'Payment Please' }} 
        />
        <Stack.Screen 
          name="Logout" 
          component={Logout} 
          options={{ title: 'Logout' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
