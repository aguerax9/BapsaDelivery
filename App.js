
import React from 'react';
import {
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

LogBox.ignoreLogs(['Reanimated 2']);

import Provider from './navigation/index';
import SearchScreen from './screens/SearchScreen';

const App = () => {
  return (
    <SearchScreen />
  );
}

const styles = StyleSheet.create({
});

export default App;
