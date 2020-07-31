/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import GlobalStyles from './GlobalStyles';
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Bird extends Component{
  render(){
    let birdImage = '';
    if(this.props.type === 'one'){
      birdImage = require('./assests/bird1.jpg');
    }else if(this.props.type === 'two'){
      birdImage = require('./assests/bird2.jpg');
    }
    return(
      <View>
        <Image source = {birdImage}/>
      </View>
    )
  }
}

class App extends Component {
  render(){
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea, styles.container}>
        <View style = {{width : 50, height : 50, backgroundColor : 'red'}}></View>
        <View style = {{width : 50, height : 50, backgroundColor : 'skyblue'}}></View>
        <View style = {{width : 50, height : 50, backgroundColor : 'blue'}}></View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  }
});


export default App;
