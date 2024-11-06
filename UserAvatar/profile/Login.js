import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Image, Dimensions, ImageBackground } from 'react-native';
import InputField from '../components/logincomp/InputField';
import Checkbox from '../components/logincomp/Checkbox';
import Button from '../components/logincomp/Button';
import ForgotPasswordLink from '../components/logincomp/ForgotPasswordLink';

const Login = ({ onLogin, onSignUp, onForgotPassword }) => {
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

  const handleSignUp = () => {
    if (onSignUp) {
      onSignUp();
    }
  };

  const handleForgotPassword = () => {
    if (onForgotPassword) {
      onForgotPassword();
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ImageBackground
        source={require('../assets/tweeterbg.jpg')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/tweeter.png')} style={styles.logo} />
          </View>

          <View style={styles.formContainer}>
            <InputField
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              screenWidth={screenWidth}
            />
            <InputField
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              screenWidth={screenWidth}
            />
            <Checkbox rememberMe={rememberMe} setRememberMe={setRememberMe} />
            <Button onPress={handleLogin} text="Log In" style={styles.loginButton} textStyle={styles.loginButtonText} />
            <Button onPress={handleSignUp} text="Sign Up" style={styles.signUpButton} textStyle={styles.signUpButtonText} />
            <ForgotPasswordLink onPress={handleForgotPassword} />
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  backgroundImage: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    width: '100%',
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
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
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },

  signUpButtonText: {
    color: '#1ca1f1',
    fontSize: 16,
  },
});

export default Login;
