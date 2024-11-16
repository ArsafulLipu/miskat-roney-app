import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;

  const handleAddToCart = () => {
    // Add product to cart and navigate to Cart screen
    navigation.navigate('Cart', { product });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
      <Text style={styles.productDescription}>
        This is a detailed description of {product.name}. A great product to add to your cart!
      </Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  productImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#6A8EAE',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ProductDetails;
