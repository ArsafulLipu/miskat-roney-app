import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const Checkout = ({ route, navigation }) => {
  const { cartItems } = route.params;

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    // Implement order processing logic here
    alert('Order placed successfully!');
    navigation.navigate('ProductList'); // Go back to the product list
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          </View>
        )}
      />
      <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      <Button title="Place Order" onPress={handlePlaceOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: '#6A8EAE',
    marginBottom: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Checkout;
