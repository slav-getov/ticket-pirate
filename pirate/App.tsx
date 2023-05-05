/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestPage from './components/Testing/TestPage';
import ActionScreen from './components/ActionScreen/ActionScreen';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <View style={styles.headerView}>
          <Text style={styles.headerTextStyle}>Welcome to Ticket Pirates</Text>
        </View>
        <Stack.Navigator initialRouteName="Actions">
          <Stack.Screen name="Test" component={TestPage} />
          <Stack.Screen name="Actions" component={ActionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerTextStyle: {
    fontSize: 20,
    color: 'black',
  },
});

export default App;
