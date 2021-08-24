import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Main from './src/components/Main';

import BodyMassIndexCalculator from './src/components/BMICalculator';

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});

const App = () => {
  // return <Main />;

  return (
    <View style = {styles.conatiner}>
      <BodyMassIndexCalculator />
    </View>
  );
};

export default App;
