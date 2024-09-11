import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export function Screen1({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome'); 
    }, 3000); 

    return () => clearTimeout(timer);

  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>VisxPay</Text>
      </View>

      {/* Loading Indicator */}
      <ActivityIndicator size="large" color="#3BA935" />
    </View>
  );
}

<Stack.Navigator>
<Stack.Screen name='Start' component={Start} options={{ headerShown: false }} />
<Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
<Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
<Stack.Screen name='SuccessScreen' component={SuccessScreen} options={{ headerShown: false }} />
<Stack.Screen name='EnterOTPScreen' component={EnterOTPScreen} options={{ headerShown: false }} />
<Stack.Screen name='ChangePasswordScreen' component={ChangePasswordScreen} options={{ headerShown: false }} />
</Stack.Navigator>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
});
