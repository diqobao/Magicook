import React from 'react';
import {
    Image,
    View,
    ProgressViewIOS,
    StyleSheet,
  } from 'react-native';

export default class FoodImgWithProgress extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    };
    render() {
        return (
            <View style={styles.img}>
              <Image
                  style={styles.img}
                  source={this.props.img}
                  />
              <ProgressViewIOS 
                  progress={this.props.freshness} 
                  style={styles.freshness}
                  />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  freshness: {
    top: -8,
    transform: [{ scaleX: 0.86 }, { scaleY: 3 }],
  },
})