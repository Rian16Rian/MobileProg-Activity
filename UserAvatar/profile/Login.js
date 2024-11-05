import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const screenWidth = Dimensions.get('window').width;

  const handleLogin = () => {
    if (email && password) {
      onLogin();
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./../assets/tweeter.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.formContainer}>
          {}
          <View style={[styles.inputBoxContainer, { width: screenWidth * 0.75 }]}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>

          {}
          <View style={[styles.inputBoxContainer, { width: screenWidth * 0.75 }]}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.rememberMeContainer}>
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.checkboxContainer}>
              <View style={[styles.checkbox, rememberMe && styles.checkedCheckbox]}>
                {}
                {rememberMe && <Icon name="check" size={12} color="#fff" style={styles.checkmarkIcon} />}
              </View>
              <Text style={styles.rememberMeText}>Remember Me?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 165,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBoxContainer: {
    height: 65,
    marginVertical: 8,
    justifyContent: 'center',
    padding: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  input: {
    width: '100%',
    height: 45,
    paddingHorizontal: 10,
    fontSize: 15,
    backgroundColor: '#f9f9f9',
  },
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
    borderColor: '#ccc',
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
  },
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
});

export default Login;
