import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Cart = ({ route, navigation }) => {
  const [cartItems, setCartItems] = useState(route.params?.product ? [route.params.product] : []);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    navigation.navigate('Checkout', { cartItems });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(item.id)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Button title="Proceed to Checkout" onPress={handleCheckout} disabled={cartItems.length === 0} />
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
  removeButton: {
    backgroundColor: '#F5A623',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default Cart;
