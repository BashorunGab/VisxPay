import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Install this if not already installed

export function NotificationsScreen({ navigation }) {
  const notifications = [
    {
      title: 'Linda_Brown sent you money',
      description: 'Fund your account using a selection of deposit methods or receive money.',
      icon: 'user-circle',
      bgColor: '#fff',
    },
    {
      title: 'UPDATE',
      description: 'Tap Manage apps & device. Apps with an update available are labeled.',
      icon: 'refresh',
      bgColor: '#fff',
    },
    {
      title: 'Your Balance is Empty',
      description: 'If you are seeing zero balance on your account in the trading platform.',
      icon: 'exclamation-circle',
      bgColor: '#fff',
    },
    {
      title: 'Congratulations!!',
      description: 'Warmest congratulations on your achievement! Wishing you even more.',
      icon: 'trophy',
      bgColor: '#fff',
    },
    {
      title: 'Identity Verification',
      description: 'Digital identity verification methods such as biometric verification, face recognition, and digital ID document.',
      icon: 'id-badge',
      bgColor: '#fff',
    },
    {
      title: 'Expired Alert!',
      description: 'The license expiry alert is displayed just below the header tabs with details such as.',
      icon: 'exclamation-triangle',
      bgColor: '#3BA935', // Green background for alert
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'} Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
        <TouchableOpacity onPress={() => {/* Handle settings action */}}>
          <FontAwesome name="gear" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.notificationList}>
        {notifications.map((notification, index) => (
          <View
            key={index}
            style={[
              styles.notificationItem,
              { backgroundColor: notification.bgColor },
            ]}
          >
            <FontAwesome name={notification.icon} size={24} color={notification.bgColor === '#3BA935' ? '#fff' : '#000'} />
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationDescription}>{notification.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TransactionHistoryScreen')}>
          <Text style={styles.navText}>Transaction</Text>
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
  notificationList: {
    marginTop: 20,
    marginBottom: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  notificationTextContainer: {
    marginLeft: 15,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
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
