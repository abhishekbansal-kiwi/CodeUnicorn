import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text:{
      fontSize: 16,
      color: 'white',
      margin: 10,
      paddingRight: 30,
      flexWrap:'wrap'
    },
    photo:{
      height: 40,
      width: 50,
      borderRadius: 2
    }

  });

export default class Row extends Component {

  constructor(props) {
     super(props);
        console.log(this.props.listtitem)
        this.state = {item:this.props.listtitem}
    }

    render(){
      return(
          <View style = {styles.container}>
            <Image source = {{uri: this.props.listtitem.picture.thumbnail}} style={styles.photo} />
               <Text style = {styles.text}>
                {this.props.listtitem.title}
               </Text>
          </View>
      );

  }
}
