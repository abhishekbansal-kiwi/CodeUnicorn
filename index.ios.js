/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NativeModules,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  AlertIOS,
  Navigator
} from 'react-native';

import  {PlayListView} from './playlistview'

export default class HelloWorldApp extends Component {
  render() {
    return (
            <View>
              <PlayListView />
            </View>
    );
  }
}


 AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
 AppRegistry.registerComponent('AwesomeProject', () => PlayListView);
