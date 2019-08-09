import React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

import { YELLOW } from '../constant';

export default class MessageBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { type: 0 }
  };
  render() {
        return (
        <View style={styles.msgBox}>
            <Text style={styles.msgText}>aaaaaaaaaferfaaaaaa</Text>
        </View>
        );
    }
}

// Styles
const styles = StyleSheet.create({
  msgBox: {
    alignItems: "center",
    borderColor: YELLOW,
  },
  msgText: {
    fontSize: 10, 
    textAlign: 'center',
    color: YELLOW,
  },
})
