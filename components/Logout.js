// components/Logout.js
import React from 'react';
import { Button, View } from 'react-native';

const Logout = ({ navigation }) => {
  const handleLogout = () => {
    // Navigate back to the Login screen
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Logout;
