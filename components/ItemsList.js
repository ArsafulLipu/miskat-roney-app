import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const items = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
  { id: '4', name: 'Item 4' },
];

const ItemsList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ItemDetail', { item })}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items List</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ItemsList;
