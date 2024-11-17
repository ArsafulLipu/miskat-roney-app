// components/DummyPaymentScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const DummyPaymentScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    // Simple validation for dummy payment
    if (!cardNumber || !expiryDate || !cvv || !amount) {
      Alert.alert('Error', 'Please fill out all payment details.');
      return;
    }

    // Simulate payment processing
    setTimeout(() => {
      Alert.alert('Payment Successful', 'Your payment has been processed!');
      navigation.navigate('ProductList'); // Go back to product list or desired screen
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      
      {/* Amount Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      {/* Card Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Card Number (e.g., 4242 4242 4242 4242)"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />

      {/* Expiry Date Input */}
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />

      {/* CVV Input */}
      <TextInput
        style={styles.input}
        placeholder="CVV"
        keyboardType="numeric"
        value={cvv}
        secureTextEntry={true}
        onChangeText={setCvv}
      />

      {/* Pay Button */}
      <Button title="Pay Now" onPress={handlePayment} color="#FF6347" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6A8EAE',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
});

export default DummyPaymentScreen;
