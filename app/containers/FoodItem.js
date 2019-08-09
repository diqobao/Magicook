import React from 'react';
import {
    Image,
    Text,
    View,
    ProgressViewIOS,
  } from 'react-native';

export class FoodItemSimple extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
    };
    render() {
        return (
            <View>
            <TouchableOpacity
            // style={styles.navButton}
            // onPress={this.props.onPressFunc}
            >
            <Image
            // style={styles.navButton}
            source={require('../static/img/food1.png')}
            />
            <ProgressViewIOS/>
            </TouchableOpacity>
            </View>
        );
    }
}
