import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#ad40af',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'bitter-bold',
          fontSize: 16,
          color: '#fff',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
