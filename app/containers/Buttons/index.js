import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
import { YELLOW, PURPLE } from '../../constant';

export class NavButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.navButton}
            onPress={this.props.onPressFunc}
            >
            {/* <Image
            style={styles.navButton}
            source={require('./mynavButton.png')}
            /> */}
            </TouchableOpacity>
            <Text style={{fontSize: 10, textAlign: 'center',color:PURPLE}}> {this.props.title} </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 6,
    },
    navButton: {
        width: 55,
        height: 55,
        alignItems: 'center',
        backgroundColor: PURPLE,
    },
    buttonText:{
        fontSize: 20,
    },
})