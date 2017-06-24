import React, { Component } from 'react';
import{
  NativeModules,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import data from './data';
import Row from './row';

export class PlayListView extends Component {

  constructor(props) {
     super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
       dataSource: ds.cloneWithRows(data)
     };

     // there was no need to bind this function though I read it so.
  //   this.podcastList = this.podcastList.bind(this);
    }
     podcastList(rowData){
       console.log('InsidePC',rowData);
       return <Row listtitem={rowData}/>;
    }

    createRowSeparator(sectionId, rowId){
      return <View key={rowId} style={styles.separator} />;
    }

     render(){
      return(
        <View style={styles.container}>
          <ListView style={styles.listtitem}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => { return this.podcastList(rowData)}}
            renderSeparator={(sectionId, rowId)=> {return this.createRowSeparator(sectionId, rowId)}}
          />
        </View>
      );
    }
  }

 const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   height: 200
  },
  listtitem: {
    padding: 10,
    backgroundColor:'black',
    height: 44
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
    marginLeft: -10,
    marginRight: -10

  }
})
