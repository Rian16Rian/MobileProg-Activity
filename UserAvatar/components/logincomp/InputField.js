import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputField = ({ placeholder, value, onChangeText, secureTextEntry, keyboardType, screenWidth }) => {
  return (
    <View style={[styles.inputBoxContainer, { width: screenWidth * 0.8 }]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBoxContainer: {
    height: 65,
    marginVertical: 8,
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
  },
  input: {
    width: '100%',
    height: 45,
    paddingHorizontal: 10,
    fontSize: 15,
    backgroundColor: '#f9f9f9',
  },
});

export default InputField;
