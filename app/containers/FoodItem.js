import React from 'react';
import {
    Image,
    Text,
    View,
    ProgressViewIOS,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';

import FoodImgWithProgress from './FoodImgWithProgress'

export class FoodItemSimple extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    };
    render() {
        return (
            <View>
            <TouchableOpacity
              style={styles.button}
              onPress={this.props.onPressFunc}
            >
            <FoodImgWithProgress
              img={this.props.img}
              freshness={this.props.freshness}
            />
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  button: {
    margin:10,
  },
  img: {
    width: 70,
    height: 70,
  },
  freshness: {
    transform: [{ scaleX: 1.0 }, { scaleY: 2.5 }],
  },
})
