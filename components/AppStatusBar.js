import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native';
import { Constants } from 'expo';

const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={[ backgroundColor, styles.container ]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight
  }
});

export default AppStatusBar;
