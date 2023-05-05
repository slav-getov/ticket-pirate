import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const TestPage = () => {
  return (
    <View style={styles.pageContainer}>
      <Text>Testing navigation</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TestPage;
