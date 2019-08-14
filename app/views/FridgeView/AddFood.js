import React from 'react';
import {
    Button,
    Image,
    Modal,
    View,
    Text,
    TextInput,
  } from 'react-native';
import { connect } from 'react-redux';

import {
  addFood, mapStateToProps, toggleAddFood, changeFoodName, changeFoodNumber
} from '../../actions';
import FoodNumberBox from '../../containers/FoodNumberBox';
import {PURPLE, WHITE, BLACK} from '../../constant';
import {styles} from './style';
import {RoundedButton} from '../../containers/Buttons';

class AddFood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          food: this.props.food,
        };
      };
      _submitAddFood = () => {
          this.props.addFood(this.props.food);
          this._closeWindow();
      };

      _closeWindow = () => {
          this.props.toggleAddFood();
      };

      _onFoodNumberChange = (increment) => {
        this.props.changeFoodNumber(-1, increment, true)
      }

      render() {
          return (
            <Modal
                animationType="slide"
                transparent
                visible={this.props.rootState.showAddFood}>
            <View style={styles.FoodDetailWindow}>
                <View style={styles.XButton}>
                  <Button
                      onPress={this._closeWindow}
                      title="X"
                      color={BLACK}
                      />
                </View>
                <View style={styles.detailContainer}>
                    <View style={styles.imgBox}>
                    <Image
                      style={styles.img}
                      source={this.props.food.img}
                      />
                    </View>
                    <TextInput
                      style={styles.FoodTitle}
                      onChangeText={(text) => this.props.changeFoodName(0, text, true)}
                      value={this.props.food.name}
                    />
                    {/* <Text style={styles.FoodTitle}>{this.props.food.name}</Text> */}
                    <FoodNumberBox number={this.props.food.number} onPress={this._onFoodNumberChange}/>
                    <Text>{this.props.food.maxDays} days if stored in the fridge</Text>                    
                    <RoundedButton title={"Add to fridge"} onPressFunc={this._submitAddFood} />
                    <RoundedButton title={"I need a recipe!"} onPressFunc={()=>{}} />
                </View>
            </View>
            </Modal> 
        );
    }
}

export default connect(
    mapStateToProps,
    { addFood, changeFoodName, changeFoodNumber, toggleAddFood }
)(AddFood);