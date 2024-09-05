import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import TransactionItemComponent from '../Components/Transaction/TransactionItemComponent';


const transactions = [
    { id: '1', name: 'John Doe', amount: '$120.50', time: '10:15 AM' },
    { id: '2', name: 'Jane Smith', amount: '$75.00', time: '11:30 AM' },
    { id: '3', name: 'Alice Johnson', amount: '$200.00', time: '01:45 PM' },
    { id: '4', name: 'Bob Brown', amount: '$15.75', time: '02:15 PM' },
    { id: '5', name: 'Charlie White', amount: '$500.00', time: '04:30 PM' },
    { id: '6', name: 'Diana Black', amount: '$60.25', time: '05:20 PM' },
    { id: '7', name: 'Eve Green', amount: '$350.75', time: '06:00 PM' },
    { id: '8', name: 'Frank Blue', amount: '$90.00', time: '08:10 PM' },
    { id: '9', name: 'Grace Yellow', amount: '$40.50', time: '09:45 PM' },
    { id: '10', name: 'Henry Pink', amount: '$180.00', time: '10:30 PM' },
];

export function TransactionHistoryScreen({ navigation }) {

    const renderItem = ({ item }) => (
        <TransactionItemComponent transaction={item} />
    );
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={styles.logoText}>VisxPay</Text>
                <TouchableOpacity onPress={() => {/* Handle notifications */ }}>
                    <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/bell.png' }} style={styles.notificationIcon} />
                </TouchableOpacity>
            </View>

            {/* Account Balance */}
            <View style={styles.balanceContainer}>
                <View style={styles.balanceCircle}>
                    <Text style={styles.balanceText}>Account Balance</Text>
                    <Text style={styles.amountText}>$7614.56</Text>
                </View>
            </View>

            {/* Transaction History */}
            <Text style={styles.transactionHeader}>Transaction History!</Text>
            {/* <View style={styles.transactionHistoryContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios/50/000000/folder-invoices--v1.png' }}
          style={styles.emptyIcon}
        />
        <Text style={styles.emptyText}>Your Transaction History is Empty.</Text>
      </View> */}

            <FlatList
                data={transactions}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
                    <Text style={styles.navText}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('TransactionHistoryScreen')}>
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
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    notificationIcon: {
        width: 30,
        height: 30,
    },
    balanceContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    balanceCircle: {
        backgroundColor: '#3BA935',
        width: 200,
        height: 200,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    balanceText: {
        fontSize: 18,
        color: '#fff',
    },
    amountText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
    },
    transactionHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
    },
    transactionHistoryContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    emptyIcon: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
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
