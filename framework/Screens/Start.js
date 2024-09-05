import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Theme } from '../Components/Themes';

export function Start({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (

    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
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
      <Text style={styles.text}>VisxPay</Text>
      <ActivityIndicator size="large" color={Theme.color.primary} style={styles.loader} />
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
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  loader: {
    marginTop: 20,
  },
});
