import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;

  const handleAddToCart = () => {
    navigation.navigate('Cart', { product });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Product Image Section */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
      </View>

      {/* Product Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
        <Text style={styles.productDescription}>
          This is a detailed description of {product.name}. A great product to add to your cart!
        </Text>

        {/* Actions Section */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.wishlistButton}>
            <MaterialIcons name="favorite-border" size={24} color="#6A8EAE" />
            <Text style={styles.wishlistText}>Wishlist</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  imageContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    elevation: 4,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#6A8EAE',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 22,
    color: '#64748B',
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wishlistButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wishlistText: {
    marginLeft: 5,
    color: '#6A8EAE',
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: '#6A8EAE',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetails;
