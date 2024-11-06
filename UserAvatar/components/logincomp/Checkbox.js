import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Checkbox = ({ rememberMe, setRememberMe }) => {
  return (
    <View style={styles.rememberMeContainer}>
      <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.checkboxContainer}>
        <View style={[styles.checkbox, rememberMe && styles.checkedCheckbox]}>
          {rememberMe && <Icon name="check" size={12} color="#fff" style={styles.checkmarkIcon} />}
        </View>
        <Text style={styles.rememberMeText}>Remember Me?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#1ca1f1',
    borderRadius: 5,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    backgroundColor: '#1ca1f1',
  },
  checkmarkIcon: {
    position: 'absolute',
    top: 2,
    left: 2,
  },
  rememberMeText: {
    fontSize: 14,
    color: '#1ca1f1',
  },
});

export default Checkbox;
