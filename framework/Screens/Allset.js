import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function SuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.headerText}>You're All Set!</Text>
      
      {/* Message */}
      <Text style={styles.messageText}>
        Your account has been successfully set up. You can now send and receive money from all over the world.
      </Text>

      {/* Proceed Button */}
      <TouchableOpacity
        style={styles.proceedButton}
        onPress={() => navigation.replace('PersonalInfoScreen')}  // Replace 'Dashboard' with the name of your dashboard screen
      >
        <Text style={styles.proceedButtonText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  messageText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  proceedButton: {
    backgroundColor: '#3BA935',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
