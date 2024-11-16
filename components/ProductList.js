import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';

const ProductList = ({ navigation }) => {
  // Sample product data with categories
  // const products = [
  //   {
  //     id: '1',
  //     name: 'Wireless Earbuds',
  //     price: 35.99,
  //     image: 'https://via.placeholder.com/150?text=Wireless+Earbuds',
  //     category: 'Phone accessories',
  //   },
  //   {
  //     id: '2',
  //     name: 'Leather Charm Bracelet',
  //     price: 24.99,
  //     image: 'https://via.placeholder.com/150?text=Leather+Charm+Bracelet',
  //     category: 'Bracelet',
  //   },
  //   {
  //     id: '3',
  //     name: 'Smartphone Stand',
  //     price: 12.49,
  //     image: 'https://via.placeholder.com/150?text=Smartphone+Stand',
  //     category: 'Electronics',
  //   },
  //   {
  //     id: '4',
  //     name: 'Polarized Sunglasses',
  //     price: 39.99,
  //     image: 'https://via.placeholder.com/150?text=Polarized+Sunglasses',
  //     category: 'Sunglass',
  //   },
  //   {
  //     id: '5',
  //     name: 'Crystal Beaded Bracelet',
  //     price: 18.99,
  //     image: 'https://via.placeholder.com/150?text=Crystal+Beaded+Bracelet',
  //     category: 'Bracelet',
  //   },
  //   {
  //     id: '6',
  //     name: 'Fitness Tracker Bracelet',
  //     price: 59.99,
  //     image: 'https://via.placeholder.com/150?text=Fitness+Tracker+Bracelet',
  //     category: 'Bracelet',
  //   },
  //   {
  //     id: '7',
  //     name: 'Phone Camera Lens Kit',
  //     price: 29.99,
  //     image: 'https://via.placeholder.com/150?text=Phone+Camera+Lens+Kit',
  //     category: 'Phone accessories',
  //   },
  //   {
  //     id: '8',
  //     name: 'Silver Infinity Bracelet',
  //     price: 22.49,
  //     image: 'https://via.placeholder.com/150?text=Silver+Infinity+Bracelet',
  //     category: 'Bracelet',
  //   },
  //   {
  //     id: '9',
  //     name: 'Portable Bluetooth Speaker',
  //     price: 45.99,
  //     image: 'https://via.placeholder.com/150?text=Bluetooth+Speaker',
  //     category: 'Electronics',
  //   },
  //   {
  //     id: '10',
  //     name: 'Aviator Sunglasses',
  //     price: 49.99,
  //     image: 'https://via.placeholder.com/150?text=Aviator+Sunglasses',
  //     category: 'Sunglass',
  //   },
  //   {
  //     id: '11',
  //     name: 'Boho Chic Bracelet',
  //     price: 27.99,
  //     image: 'https://via.placeholder.com/150?text=Boho+Chic+Bracelet',
  //     category: 'Bracelet',
  //   },
  //   {
  //     id: '12',
  //     name: 'Waterproof Sports Bracelet',
  //     price: 34.99,
  //     image: 'https://via.placeholder.com/150?text=Waterproof+Sports+Bracelet',
  //     category: 'Bracelet',
  //   },
  // ];
  const products = [
    {
      id: '1',
      name: 'Wireless Earbuds',
      price: 35.99,
      image: 'https://images.pexels.com/photos/3769734/pexels-photo-3769734.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      category: 'Phone accessories',
    },
    {
      id: '2',
      name: 'Leather Charm Bracelet',
      price: 24.99,
      image: 'https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      category: 'Bracelet',
    },
    {
      id: '3',
      name: 'Smartphone Stand',
      price: 12.49,
      image: 'https://images.pexels.com/photos/4559599/pexels-photo-4559599.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      category: 'Electronics',
    },
    {
      id: '4',
      name: 'Polarized Sunglasses',
      price: 39.99,
      image: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      category: 'Sunglass',
    },
    {
      id: '5',
      name: 'Crystal Beaded Bracelet',
      price: 18.99,
      image: 'https://images.pexels.com/photos/5384187/pexels-photo-5384187.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      category: 'Bracelet',
    },
    {
      id: '6',
      name: 'Fitness Tracker Bracelet',
      price: 59.99,
      image: 'https://images.pexels.com/photos/1386619/pexels-photo-1386619.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      category: 'Bracelet',
    },
    {
      id: '7',
      name: 'Phone Camera Lens Kit',
      price: 29.99,
      image: 'https://images.pexels.com/photos/2785012/pexels-photo-2785012.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      category: 'Phone accessories',
    },
    {
      id: '8',
      name: 'Silver Infinity Bracelet',
      price: 22.49,
      image: 'https://images.pexels.com/photos/61120/pexels-photo-61120.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      category: 'Bracelet',
    },
    {
      id: '9',
      name: 'Portable Bluetooth Speaker',
      price: 45.99,
      image: 'https://images.pexels.com/photos/1474132/pexels-photo-1474132.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      category: 'Electronics',
    },
    {
      id: '10',
      name: 'Aviator Sunglasses',
      price: 49.99,
      image: 'https://images.pexels.com/photos/209702/pexels-photo-209702.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      category: 'Sunglass',
    },
    {
      id: '11',
      name: 'Boho Chic Bracelet',
      price: 27.99,
      image: 'https://images.pexels.com/photos/301162/pexels-photo-301162.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      category: 'Bracelet',
    },
    {
      id: '12',
      name: 'Waterproof Sports Bracelet',
      price: 34.99,
      image: 'https://images.pexels.com/photos/929191/pexels-photo-929191.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      category: 'Bracelet',
    },
  ];
  

  const categories = ['All', 'Phone accessories',
'Sunglass', 'Bracelet'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <View style={styles.container}>
      {/* Branding: App name on the home screen */}
      <Text style={styles.header}>Miskat-Mart</Text>
      
      {/* Category Filter */}
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <Button
            key={category}
            title={category}
            color={selectedCategory === category ? '#6A8EAE' : '#CCCCCC'}
            onPress={() => setSelectedCategory(category)}
          />
        ))}
      </View>
      
      {/* Product List */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6A8EAE',
    textAlign: 'center',
    marginVertical: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#6A8EAE',
  },
});

export default ProductList;
