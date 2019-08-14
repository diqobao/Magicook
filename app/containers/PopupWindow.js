import React from 'react';
import {
    Button,
    Modal,
    View,
    StyleSheet,
  } from 'react-native';

import PURPLE from '../constant'

export default class PopupWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          modalVisible: true,
        }
      };
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
      _closeWindow = () => {
          this.setModalVisible(false);
        }

      render() {
          return (
            <Modal
            animationType="slide"
            transparent
            visible={this.state.modalVisible}>
            <View style={styles.window}>
                <Button
                    onPress={this._closeWindow}
                    title="X"
                    color={PURPLE}
                    />
            </View>
            </Modal> 
        );
    }
}

export const styles = StyleSheet.create({
    window: {
        alignSelf: 'center',
        marginTop: 150,
        width:300,
        height:600,
        opacity:0.1,
        backgroundColor: 'rgb(62,4,12)'
    },
})