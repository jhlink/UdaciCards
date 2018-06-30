import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native';
import { Constants } from 'expo';
import { purple } from '../utils/colors';

const AppStatusBar = ({ ...props }) => {
  return (
    <View style={[ styles.color, styles.container ]}>
      <StatusBar translucent backgroundColor={styles.color} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight
  }, 
  color: {
    backgroundColor: purple
  }
});

export default AppStatusBar;
