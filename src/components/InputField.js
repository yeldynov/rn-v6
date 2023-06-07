import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}
    >
      {icon}
      {inputType == 'password' ? (
        <TextInput
          style={{ flex: 1, paddingVertical: 0 }}
          placeholder={label}
          keyboardType={keyboardType}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          style={{ flex: 1, paddingVertical: 0 }}
          placeholder={label}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
        />
      )}

      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: '#ad40af', fontFamily: 'noto-bold' }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
