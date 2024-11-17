import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Button, Pressable } from 'react-native';

const ProductList = ({ navigation }) => {
  // List of 50 products with different categories
  const products = [
    // Phone Accessories
    { id: '1', name: 'Wireless Earbuds', price: 35.99, image: 'https://images.pexels.com/photos/3769734/pexels-photo-3769734.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Phone accessories' },
    { id: '2', name: 'Phone Camera Lens Kit', price: 29.99, image: 'https://images.pexels.com/photos/2785012/pexels-photo-2785012.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Phone accessories' },
    { id: '3', name: 'Smartphone Stand', price: 12.49, image: 'https://images.pexels.com/photos/4559599/pexels-photo-4559599.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Phone accessories' },
    { id: '4', name: 'Phone Holder', price: 19.99, image: 'https://images.pexels.com/photos/1509422/pexels-photo-1509422.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Phone accessories' },

    // Bracelets
    { id: '5', name: 'Leather Charm Bracelet', price: 24.99, image: 'https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Bracelet' },
    { id: '6', name: 'Crystal Beaded Bracelet', price: 18.99, image: 'https://images.pexels.com/photos/5384187/pexels-photo-5384187.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Bracelet' },
    { id: '7', name: 'Fitness Tracker Bracelet', price: 59.99, image: 'https://images.pexels.com/photos/1386619/pexels-photo-1386619.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Bracelet' },
    { id: '8', name: 'Silver Infinity Bracelet', price: 22.49, image: 'https://images.pexels.com/photos/61120/pexels-photo-61120.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Bracelet' },
    { id: '9', name: 'Boho Chic Bracelet', price: 27.99, image: 'https://images.pexels.com/photos/301162/pexels-photo-301162.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Bracelet' },
    { id: '10', name: 'Waterproof Sports Bracelet', price: 34.99, image: 'https://images.pexels.com/photos/929191/pexels-photo-929191.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Bracelet' },

    // Sunglasses
    { id: '11', name: 'Polarized Sunglasses', price: 39.99, image: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Sunglass' },
    { id: '12', name: 'Aviator Sunglasses', price: 49.99, image: 'https://images.pexels.com/photos/209702/pexels-photo-209702.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Sunglass' },
    { id: '13', name: 'Retro Round Sunglasses', price: 44.99, image: 'https://images.pexels.com/photos/1394916/pexels-photo-1394916.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Sunglass' },
    { id: '14', name: 'Classic Wayfarer Sunglasses', price: 59.99, image: 'https://images.pexels.com/photos/110469/pexels-photo-110469.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Sunglass' },
    { id: '15', name: 'Modern Cat-Eye Sunglasses', price: 35.99, image: 'https://images.pexels.com/photos/4577441/pexels-photo-4577441.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Sunglass' },

    // Headphones
    { id: '16', name: 'Bluetooth Over-Ear Headphones', price: 69.99, image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Headphones' },
    { id: '17', name: 'Noise Cancelling Headphones', price: 99.99, image: 'https://images.pexels.com/photos/65892/pexels-photo-65892.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Headphones' },
    { id: '18', name: 'Gaming Headset', price: 79.99, image: 'https://images.pexels.com/photos/788888/pexels-photo-788888.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Headphones' },
    { id: '19', name: 'Sports Earbuds', price: 39.99, image: 'https://images.pexels.com/photos/1125286/pexels-photo-1125286.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Headphones' },
    { id: '20', name: 'Wireless Headset', price: 49.99, image: 'https://images.pexels.com/photos/4006973/pexels-photo-4006973.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Headphones' },

    // Watches
    { id: '21', name: 'Smartwatch', price: 199.99, image: 'https://images.pexels.com/photos/1148953/pexels-photo-1148953.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Watches' },
    { id: '22', name: 'Classic Leather Watch', price: 89.99, image: 'https://images.pexels.com/photos/1298111/pexels-photo-1298111.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Watches' },
    { id: '23', name: 'Digital Sports Watch', price: 59.99, image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Watches' },
    { id: '24', name: 'Luxury Gold Watch', price: 499.99, image: 'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Watches' },
    { id: '25', name: 'Fitness Tracker', price: 99.99, image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Watches' },

    // Books
    { id: '26', name: 'Mystery Novel', price: 14.99, image: 'https://images.pexels.com/photos/356426/pexels-photo-356426.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Books' },
    { id: '27', name: 'Science Fiction Book', price: 18.99, image: 'https://images.pexels.com/photos/365185/pexels-photo-365185.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Books' },
    { id: '28', name: 'Romantic Novel', price: 12.99, image: 'https://images.pexels.com/photos/3759488/pexels-photo-3759488.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Books' },
    { id: '29', name: 'Self-Help Guide', price: 19.99, image: 'https://images.pexels.com/photos/327876/pexels-photo-327876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Books' },
    { id: '30', name: 'Cookbook', price: 24.99, image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Books' },

    // Shoes
    { id: '31', name: 'Running Shoes', price: 79.99, image: 'https://images.pexels.com/photos/235171/pexels-photo-235171.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Shoes' },
    { id: '32', name: 'Casual Sneakers', price: 59.99, image: 'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Shoes' },
    { id: '33', name: 'Formal Leather Shoes', price: 129.99, image: 'https://images.pexels.com/photos/1040429/pexels-photo-1040429.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Shoes' },
    { id: '34', name: 'High Heels', price: 69.99, image: 'https://images.pexels.com/photos/298346/pexels-photo-298346.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Shoes' },
    { id: '35', name: 'Flip Flops', price: 14.99, image: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Shoes' },

    // Bags
    { id: '36', name: 'Leather Backpack', price: 129.99, image: 'https://images.pexels.com/photos/769747/pexels-photo-769747.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Bags' },
    { id: '37', name: 'Travel Duffel Bag', price: 89.99, image: 'https://images.pexels.com/photos/861292/pexels-photo-861292.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Bags' },
    { id: '38', name: 'Laptop Messenger Bag', price: 59.99, image: 'https://images.pexels.com/photos/119558/pexels-photo-119558.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Bags' },
    { id: '39', name: 'Fashion Tote Bag', price: 39.99, image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Bags' },
    { id: '40', name: 'School Backpack', price: 49.99, image: 'https://images.pexels.com/photos/703162/pexels-photo-703162.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Bags' },

    // Gadgets
    { id: '41', name: 'Portable Bluetooth Speaker', price: 45.99, image: 'https://images.pexels.com/photos/1474132/pexels-photo-1474132.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Gadgets' },
    { id: '42', name: 'Smart Home Hub', price: 129.99, image: 'https://images.pexels.com/photos/909620/pexels-photo-909620.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Gadgets' },
    { id: '43', name: 'Action Camera', price: 149.99, image: 'https://images.pexels.com/photos/333371/pexels-photo-333371.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Gadgets' },
    { id: '44', name: 'Fitness Tracker', price: 59.99, image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Gadgets' },
    { id: '45', name: 'Wireless Charger', price: 19.99, image: 'https://images.pexels.com/photos/3761065/pexels-photo-3761065.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Gadgets' },

    // Others
    { id: '46', name: 'Yoga Mat', price: 29.99, image: 'https://images.pexels.com/photos/3822767/pexels-photo-3822767.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Others' },
    { id: '47', name: 'Wall Art', price: 39.99, image: 'https://images.pexels.com/photos/374726/pexels-photo-374726.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Others' },
    { id: '48', name: 'Travel Pillow', price: 14.99, image: 'https://images.pexels.com/photos/1437056/pexels-photo-1437056.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Others' },
    { id: '49', name: 'Water Bottle', price: 19.99, image: 'https://images.pexels.com/photos/1459518/pexels-photo-1459518.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Others' },
    { id: '50', name: 'Picnic Blanket', price: 24.99, image: 'https://images.pexels.com/photos/348523/pexels-photo-348523.jpeg?auto=compress&cs=tinysrgb&w=150&h=150', category: 'Others' },
  ];

  const categories = ['All', 'Phone accessories', 'Bracelet', 'Sunglass', 'Headphones', 'Watches', 'Books', 'Shoes', 'Bags', 'Gadgets', 'Others'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  // Logout function to navigate to Login screen
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Miskat-Mart</Text>
      </View>

      <View style={styles.container}>
        {/* Category Filter */}
        <View style={styles.categoryContainer}>
          {categories.map((category) => (
            <Pressable
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonSelected,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === category && styles.categoryButtonTextSelected,
                ]}
              >
                {category}
              </Text>
            </Pressable>
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

      {/* Logout Button */}
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#6A8EAE',
    paddingVertical: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#F5F5F5',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#CCCCCC',
    borderRadius: 20,
    margin: 5,
  },
  categoryButtonSelected: {
    backgroundColor: '#6A8EAE',
  },
  categoryButtonText: {
    color: '#333333',
    fontWeight: '500',
  },
  categoryButtonTextSelected: {
    color: '#FFFFFF',
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  productImage: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 18,
    color: '#6A8EAE',
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 50,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductList;
