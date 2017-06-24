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

import MyScene from './MyScene'



export default class HelloWorldApp extends Component {
  render() {
    return (
            <View style={styles.superContainer}>
              <View style={styles.container}>
                    <View style={styles.hellocontainer}>
                        <Text style={styles.instructions}>
                            Hello World!!
                        </Text>
                    </View>
                    <View style={styles.bananaContainer}>
                        {/* <Bananas />*/ }
                        <Text>
                            Hello Bananas!!
                            Aanya loves them !!
                        </Text>

                    </View>
                    <View style={styles.custom}>
                        <Blink text= 'Look At Me !! Look At Me !!' />
                        <Blink text='Yes blinking is so great' />
                        <Blink text='Why did they ever take this out of HTML' />
                    </View>
                </View>
                <View>
                    <NavButton>
                    </NavButton>
                </View>
                <Navigator
                        initialRoute = {{ title: 'My Initial Scene', index: 0}}
                        renderScene = {(route, navigator) =>
                                                        <MyScene
                                                                title = {route.title}
                                                                onForward = {() => {
                                                                                    const nextIndex = route.index + 1;
                                                                                    navigator.push(
                                                                                    {
                                                                                                   title: 'Scene' + nextIndex,
                                                                                                   index: nextIndex,
                                                                                    })
                                                                                    }
                                                                                    }
                                                                onBack = {() => {
                                                                                    if(route.index>0){
                                                                                            navigator.pop();
                                                                                    }
                                                                                }
                                                                            }
                                                        />
                                                    }
                                                />
            </View>
    );
  }
}

class Bananas extends Component {
    render() {

        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
                <Image source = {pic} />
        );
    }
}

class Blink extends Component {

    constructor(props) {
        super(props);

        this.state = {showText: true};

        setInterval(() => {

                    this.setState({showText: !this.state.showText})

            }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text: ' ';
        return (
                <Text>{display}</Text>
            );
    }
}

class NavButton extends Component {

    constructor(props){
        super(props);

    }
    render() {
        return(
               <TouchableHighlight style={styles.NavButton}
                                   onPress={this.showAlert}
                                    activeOpacity={0.1}
                                    underlayColor='#FFFFFF'>
                    <Text style={styles.NavButtonText}>GO</Text>
               </TouchableHighlight>
               )
    }
    showAlert(){
        AlertIOS.alert('Awesome Alert', 'This is my first React Native alert.', [{text: 'Thanks'}])
    }
}




const styles = StyleSheet.create({

  superContainer:{
     flex:1,
     flexDirection: 'column',
     justifyContent:'center',
     backgroundColor:'yellow'
  },
  container: {
    backgroundColor:'grey',
    flexDirection: 'row',
    alignItems:'flex-start'

  },
 hellocontainer:{
    flex:1,
    backgroundColor:'steelblue',
    justifyContent: 'center',
    backgroundColor: 'powderblue'
 },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
 custom: {
    flex:2,
    flexDirection:'column',
    backgroundColor: 'skyblue'
 },
 bananaContainer: {
    flex:1,
    backgroundColor:'red'
 },
 NavButton:{
    borderColor:'#000000',
    borderWidth: 1.0,
    borderRadius:14,
    height:40,
    marginTop:50,
    alignSelf: 'stretch',
    backgroundColor:'#48BBEC',
    justifyContent:'center'
 },
 NavButtonText:{
   alignSelf: 'center'
 }


});

AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
//AppRegistry.registerComponent('AwesomeProject', () => Bananas);





{/*
var CalendarManager = NativeModules.CalendarManager;
CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey', 3);
var today = new Date('05 October 2011 14:48 UTC');
CalendarManager.addEvent2('Birthday Party', '4 Privet Drive, Surrey', today.toISOString());
CalendarManager.findEvents((error, events) => {
  if(error)
    //console.error();
    console.log("fail!!");
    else {
      //this.setState({events:events})

      console.log("success!!");
    }
  }
  */}
//)
