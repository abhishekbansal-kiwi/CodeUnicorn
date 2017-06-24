/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import NavButton from '.'

export default class MyScene extends Component {
  
    static get defaultProps(){
        return{
            title: 'MyScene'
        };
    }
    render() {
        return (
                <View>
                    <Text>Hi This is {this.props.title}</Text>
                    <TouchableHighlight onPress = {this.props.onForward}>
                        <Text> Tap Here to load next scene </Text>
                    </TouchableHighlight>
                
                    <TouchableHighlight onPress = {this.props.onBack}>
                        <Text> Tap Here to go back </Text>
                    </TouchableHighlight>
                </View>
        );
  }
}
MyScene.propTypes = {
title: PropTypes.string.isRequired,
onForward: PropTypes.func.isRequired,
onBack: PropTypes.func.isRequired,
};
