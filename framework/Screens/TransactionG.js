import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  AppBar,
  Searchbar,
  TabLayout,
  TabView,
  IconButton,
} from 'react-native-paper';

const TransactionHistoryScreen = () => {
  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: 'all', title: 'All' },
    { key: 'mostHistory', title: 'Most History' },
    { key: 'income', title: 'Income' },
    { key: 'request', title: 'Request' },
  ];

  const renderScene = ({ route }) => {
    // Implement the specific view for each tab (e.g., transaction list)
    return <View key={route.key} style={styles.tabContainer}>
      {/* Your transaction list component here */}
    </View>;
  };

  return (
    <View style={styles.container}>
      <AppBar.Header>
        <IconButton name="arrow-left" onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Transaction History!</Text>
        <Searchbar placeholder="Search" />
      </AppBar.Header>
      <TabLayout style={styles.tabLayout} navigationState={{ index, routes }} onIndexChange={setIndex} />
      <TabView navigationState={{ index, routes }} renderScene={renderScene} />
      <View style={styles.footer}>
        {/* Your footer icons and navigation */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Define your custom styles for fonts, colors, and layout
});

export function TransactionHistoryScreen() {
    
} ;