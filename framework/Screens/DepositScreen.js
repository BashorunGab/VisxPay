import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export function DepositScreen({ navigation }) {
  const deposits = [
    {
      username: '@ryehambu',
      amount: '$356.21',
      status: 'Success!',
      date: 'June 15, 2025',
      bgColor: '#3BA935', // Green background for success
      statusColor: '#fff', // White text for success
    },
    {
      username: '@rryfshsea',
      amount: '$360.21',
      status: 'Pending',
      date: 'June 15, 2025',
      bgColor: '#fff', // White background for pending
      statusColor: '#000', // Black text for pending
    },
    {
      username: '@chaelephant',
      amount: '$420.21',
      status: 'Pending',
      date: 'June 15, 2025',
      bgColor: '#fff',
      statusColor: '#000',
    },
    {
      username: '@theprestige',
      amount: '$145.21',
      status: 'Pending',
      date: 'June 15, 2025',
      bgColor: '#fff',
      statusColor: '#000',
    },
    {
      username: '@ryehambu',
      amount: '$213.21',
      status: 'Success!',
      date: 'June 15, 2025',
      bgColor: '#3BA935',
      statusColor: '#fff',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'} Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Deposit</Text>
        <TouchableOpacity onPress={() => {/* Handle "See All" action */}}>
          <Text style={styles.seeAll}>See all {'>'}</Text>
        </TouchableOpacity>
      </View>

      {/* Deposit List */}
      <ScrollView style={styles.depositList}>
        {deposits.map((deposit, index) => (
          <View
            key={index}
            style={[
              styles.depositItem,
              { backgroundColor: deposit.bgColor },
            ]}
          >
            <Text style={styles.username}>{deposit.username}</Text>
            <Text style={styles.amount}>Amount {deposit.amount}</Text>
            <Text style={[styles.status, { color: deposit.statusColor }]}>
              {deposit.status}
            </Text>
            <Text style={styles.date}>{deposit.date}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.loanButton} onPress={() => {/* Handle Take Loan action */}}>
          <Text style={styles.loanButtonText}>Take Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.depositButton} onPress={() => {/* Handle Deposit Now action */}}>
          <Text style={styles.depositButtonText}>Deposit Now+</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TransactionHistoryScreenB')}>
          <Text style={styles.navText}>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PaymentMethodsScreen')}>
          <Text style={styles.navText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
          <Text style={styles.navText}>About Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  backButton: {
    fontSize: 16,
    color: '#000',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  seeAll: {
    fontSize: 16,
    color: '#000',
  },
  depositList: {
    marginTop: 20,
    marginBottom: 20,
  },
  depositItem: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
  },
  loanButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  loanButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  depositButton: {
    backgroundColor: '#3BA935',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  depositButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    height: 60,
    borderTopWidth: 1,
    borderColor: '#e5e5e5',
    backgroundColor: '#fff',
  },
  navText: {
    fontSize: 16,
    color: '#000',
  },
});
