import React from 'react';
import {
    Button,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
import { YELLOW, PURPLE, WHITE } from '../../constant';

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

export class RoundedButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.roundedButton}
                onPress={this.props.onPressFunc}
                >
                <Text style={styles.roundedButtonText}>{this.props.title}</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

export class BigAddButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <TouchableOpacity
            style={styles.bigRoundedButton}
            onPress={this.props.onPressFunc}
            >
            <Text style={styles.bigRoundedButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
        )
    }
}

export class GoBackButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Button 
            title="<"
            color={WHITE}
            onPress={this.props.onPress}
            />
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
    roundedButton:{
        width: 170,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PURPLE,
        borderRadius: 20,
    },
    roundedButtonText:{
        fontSize: 13,
        color: WHITE,
    },
    bigRoundedButton:{
        width: 180,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: YELLOW,
        borderRadius: 80,
    },
    bigRoundedButtonText:{
        fontSize: 13,
        color: PURPLE,
    },
})