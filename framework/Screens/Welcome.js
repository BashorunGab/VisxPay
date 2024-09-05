import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Theme } from '../Components/Themes';

export function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Logo */}
      <Svg
        width={100}
        height={100}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.logo}
      >
        <Path
          d="M12 0L1.198 9.267h21.604L12 0zM1.2 14.732h21.602L12 24 1.2 14.732z"
          fill={Theme.color.primary}
        />
      </Svg>

      {/* Heading Text */}
      <Text style={styles.heading}>Let's get Started!</Text>

      {/* Subtext */}
      <Text style={styles.subtext}>
        Pay online, send money and earn points with a digital wallet.
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signinButton}
          onPress={() => navigation.navigate('ChangePasswordScreen')}
        >
          <Text style={styles.signinText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  signupButton: {
    backgroundColor: Theme.color.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginRight: 10,
    flex: 1,
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signinButton: {
    borderColor: Theme.color.primary,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    flex: 1,
  },
  signinText: {
    color: Theme.color.primary,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
