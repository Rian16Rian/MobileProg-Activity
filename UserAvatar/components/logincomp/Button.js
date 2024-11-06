import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, text, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    width: '100%',
    padding: 13,
    backgroundColor: '#1ca1f1',
    borderRadius: 5,
    marginVertical: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 17,
  },
  signUpButton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 12,
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },
  signUpButtonText: {
    color: '#1ca1f1',
    fontSize: 16,
  },
});

export default Button;
