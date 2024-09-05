import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export function EnterOTPScreen({ navigation }) {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(45);
  const [resendEnabled, setResendEnabled] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setResendEnabled(true);
    }
  }, [timer]);

  const handleOTPChange = (value) => {
    // Ensure only numeric input is allowed and limit it to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.headerText}>Enter OTP</Text>
      <Text style={styles.instructionText}>
        We've sent a One Time Password (OTP) to your email or phone number.
      </Text>

      {/* OTP Input */}
      <TextInput
        style={styles.otpInput}
        placeholder="Enter 6-digit OTP"
        placeholderTextColor="#666"
        keyboardType="numeric"
        value={otp}
        onChangeText={handleOTPChange}
        maxLength={6}
      />

      {/* Didn't Get Code */}
      <Text style={styles.timerText}>
        Didn't get the code? You can request a new code in {timer} seconds.
      </Text>
      <TouchableOpacity
        style={[styles.resendButton, { opacity: resendEnabled ? 1 : 0.5 }]}
        disabled={!resendEnabled}
        onPress={() => {
          if (resendEnabled) {
            setTimer(45);
            setResendEnabled(false);
            // Logic to resend OTP goes here
          }
        }}
      >
        <Text style={styles.resendButtonText}>Resend Code</Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {navigation.navigate('SuccessScreen')}}>
        <Text style={styles.submitButtonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  otpInput: {
    fontSize: 24,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    color: '#000',
  },
  timerText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  resendButton: {
    marginBottom: 30,
  },
  resendButtonText: {
    fontSize: 16,
    color: '#3BA935',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#3BA935',
    paddingVertical: 15,
    borderRadius: 25,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
