import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export function PersonalInfoScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton}>
                <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>

            {/* Header */}
            <Text style={styles.header}>Personal Info</Text>

            {/* Profile Picture */}
            <View style={styles.profileContainer}>
                <View style={styles.profilePicture}>
                    <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
                    <TouchableOpacity style={styles.editIconContainer}>
                        <Text style={styles.editIconText}>✏️</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Form Fields */}
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                defaultValue=""
            />
            <TextInput
                style={styles.input}
                placeholder="Email Address"
                defaultValue=""
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                defaultValue=""
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Date of Birth"
                defaultValue=""
            />

            {/* Save Changes Button */}
            <TouchableOpacity style={styles.saveButton}
                onPress={() => { navigation.navigate('DepositsScreen') }}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
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
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 10,
    },
    backButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profilePicture: {
        position: 'relative',
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#ddd',
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    editIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    editIconText: {
        fontSize: 14,
        color: '#4CAF50',
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
    saveButton: {
        backgroundColor: '#4CAF50',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
