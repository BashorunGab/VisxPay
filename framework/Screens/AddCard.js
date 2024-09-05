import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function AddNewCardScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>

      {/* Add New Card Header */}
      <Text style={styles.header}>Add New Card</Text>
      {/* Card Preview */}
      <View style={styles.cardPreview}>
        <Text style={styles.cardName}>VisxPay</Text>
        <Text style={styles.cardNumber}>1234 5678 8764 4320</Text>
        <Text style={styles.cardHolderName}>JENNIFER WILLIAMS</Text>
        <Text style={styles.cardExpiry}>12/26</Text>
      </View>

      {/* Form Fields */}
      <TextInput
        style={styles.input}
        placeholder="Account Holder Name"
        defaultValue="Jennifer Williams"
      />
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        defaultValue="1234 5678 8764 4320"
        keyboardType="numeric"
      />
      <View style={styles.row}>
        <TextInput
          style={styles.inputHalf}
          placeholder="Expiry Date"
          defaultValue="12/26"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.inputHalf}
          placeholder="CVV"
          defaultValue="345"
          keyboardType="numeric"
          secureTextEntry
        />
      </View>

      {/* Add Card Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.replace('PaymentMethodsScreen')}>
      
        <Text style={styles.addButtonText}>Add Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  cardPreview: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cardHolderName: {
    color: '#fff',
    fontSize: 16,
  },
  cardExpiry: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'right',
  },
  input: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputHalf: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
