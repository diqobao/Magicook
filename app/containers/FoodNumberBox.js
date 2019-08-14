import React from 'react';
import {
    Button,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
import { BLACK } from '../constant';

export default class FoodNumberBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    };
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={()=>this.props.onPress(-1)}
                    style={styles.button}
                    title="-"
                    color={BLACK}
                    disabled={this.props.number<1}
                    />
            {/* <TouchableOpacity
              style={styles.button}
              onPress={this.props.onPressFunc}
            >
            <Text>-</Text>
            </TouchableOpacity> */}
                <Text style={styles.text}>{this.props.number}</Text>
                <Button
                    style={styles.button}
                    onPress={()=>this.props.onPress(1)}
                    color={BLACK}
                    title="+"
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  button: {
    padding: 25,
  },
  container: {
    flexDirection: "row",
    alignContent: "space-between",
    alignSelf: "center",
    justifyContent: 'space-between',
    // width: 170,
    // height: 35,
    margin:10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 40,
  },
})
