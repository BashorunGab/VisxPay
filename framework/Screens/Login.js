import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Path } from 'react-native-svg';

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <Text style={styles.instructionText}>Enter Your User Details To Sign In</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username / Email Address"
          placeholderTextColor="#666"
          onChangeText={setEmail}
          value={email}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.icon}>
          <Icon name={showPassword ? "eye-slash" : "eye"} size={20} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Remember Me and Forgot Password */}
      <View style={styles.optionsContainer}>
        <View style={styles.rememberMeContainer}>
        
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ChangePasswordScreen')}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signinButton} onPress={() => {}}>
        <Text style={styles.signinButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Social Sign In */}
      <Text style={styles.orText}>or sign up with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="anchor" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#333' }]}>
          <Icon name="github" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3BA935' }]}>
          <Icon name="leaf" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <Text style={styles.signUpText}>
        Already have an account?{' '}
        <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUpScreen')}>
          Sign in
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  instructionText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#3BA935',
  },
  signinButton: {
    backgroundColor: '#3BA935',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 30,
  },
  signinButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  socialButton: {
    backgroundColor: '#3BA935',
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  signUpText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  signUpLink: {
    color: '#3BA935',
    fontWeight: 'bold',
  },
});
