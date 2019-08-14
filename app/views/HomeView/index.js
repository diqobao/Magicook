import React from 'react';
import {
    ImageBackground,
    View,
  } from 'react-native';

import {styles} from './style';
import {NavButton} from '../../containers/Buttons/index';
import MessageBox from '../../containers/MessageBox';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  };
  render() {
        return (
        <View style={{alignItems: "center"}}>
          <ImageBackground source={require('../../static/img/homebg.png')} style={{width: '100%', height: '100%'}}>
            <View style={styles.MessageBox}>
              <MessageBox />
            </View>
            <View style={styles.navContainer}>
              <NavButton title="EXPLORE" onPressFunc={() => this.props.navigation.navigate('Home')}/>
              <NavButton title="RECIPE" onPressFunc={() => this.props.navigation.navigate('Community')}/>
              <NavButton title="FRIDGE" onPressFunc={() => this.props.navigation.navigate('Fridge')}/>
            </View>
          </ImageBackground>
        </View>
        );
    }
}
