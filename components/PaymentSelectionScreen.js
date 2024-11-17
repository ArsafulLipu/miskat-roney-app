import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const PaymentSelectionScreen = ({ navigation }) => {
  const paymentMethods = [
    { id: '1', name: 'Bank Transfer', icon: 'account-balance', screen: 'DummyPayment' },
    { id: '2', name: 'Credit/Debit Card', icon: 'credit-card', screen: 'DummyPayment' },
    { id: '3', name: 'bKash', icon: 'mobile-friendly', screen: 'DummyPayment' },
    { id: '4', name: 'Nagad', icon: 'account-balance-wallet', screen: 'DummyPayment' },
    { id: '5', name: 'Others', icon: 'more-horiz', screen: 'DummyPayment' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Payment Method</Text>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id}
        numColumns={2} // Arrange items in two columns
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.paymentCard}
            onPress={() => navigation.navigate(item.screen)}
          >
            <MaterialIcons name={item.icon} size={40} color="#6A8EAE" />
            <Text style={styles.paymentCardText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#334155',
    marginBottom: 20,
  },
  grid: {
    justifyContent: 'center',
  },
  paymentCard: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  paymentCardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#334155',
    textAlign: 'center',
  },
});

export default PaymentSelectionScreen;
