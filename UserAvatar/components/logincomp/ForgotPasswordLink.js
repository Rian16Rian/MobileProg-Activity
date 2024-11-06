import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const ForgotPasswordLink = ({ onPress }) => {
  return (
    <View style={styles.forgotPasswordContainer}>
      <Text style={styles.forgotPasswordText}>Forgot Password? </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.forgotPasswordLink}>Click here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#5A5A5A',
  },
  forgotPasswordLink: {
    fontSize: 14,
    color: '#1ca1f1',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default ForgotPasswordLink;
