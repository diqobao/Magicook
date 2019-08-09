import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
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
            <MessageBox />
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

// Styles
// const styles = StyleSheet.create({
  
// })
//     scrollView: {
//       backgroundColor: Colors.lighter,
//     },
//     engine: {
//       position: 'absolute',
//       right: 0,
//     },
//     body: {
//       backgroundColor: Colors.white,
//     },
//     sectionContainer: {
//       marginTop: 32,
//       paddingHorizontal: 24,
//     },
//     sectionTitle: {
//       fontSize: 24,
//       fontWeight: '600',
//       color: Colors.black,
//     },
//     sectionDescription: {
//       marginTop: 8,
//       fontSize: 18,
//       fontWeight: '400',
//       color: Colors.dark,
//     },
//     highlight: {
//       fontWeight: '700',
//     },
//     footer: {
//       color: Colors.dark,
//       fontSize: 12,
//       fontWeight: '600',
//       padding: 4,
//       paddingRight: 12,
//       textAlign: 'right',
//     },
//   });