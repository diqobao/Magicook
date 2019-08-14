import React from 'react';
import {
    Button,
    Modal,
    View,
    Text,
  } from 'react-native';
import { connect } from 'react-redux';

import {mapStateToProps, toggleFoodDetail, changeFoodNumber, finishFood} from '../../actions';
import FoodImgWithProgress from '../../containers/FoodImgWithProgress';
import FoodNumberBox from '../../containers/FoodNumberBox';
import {PURPLE, WHITE, BLACK} from '../../constant';
import {styles} from './style';
import {RoundedButton} from '../../containers/Buttons';

class FoodDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          modalVisible: this.props.modelVisible,
        }
      };
      setModalVisible(visible) {
          this.setState({modalVisible: visible});
      }
      _closeWindow = () => {
        //   this.setModalVisible(false);
          this.props.toggleFoodDetail(this.props.food.id);
      }
      _onFoodNumberChange = (increment) => {
        this.props.changeFoodNumber(this.props.food.id, increment, false)
      }
      _finishFood = () => {
        this.props.finishFood(this.props.food.id);
        this._closeWindow();
      }

      render() {
        //   console.log(this.state.food);
          return (
            <Modal
                animationType="slide"
                transparent
                visible={this.props.rootState.showFoodDetail}>
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
                        <FoodImgWithProgress
                            img={this.props.food.img}
                            freshness={this.props.food.days/this.props.food.maxDays}
                        />
                    </View>
                    <Text style={styles.FoodTitle}>{this.props.food.name}</Text>
                    <FoodNumberBox number={this.props.food.number} onPress={this._onFoodNumberChange}/>
                    <RoundedButton title={"I cooked it!"} onPressFunc={this._finishFood} />
                    <RoundedButton title={"I need a recipe!"} onPressFunc={()=>{}} />
                </View>
            </View>
            </Modal> 
        );
    }
}

export default connect(
    mapStateToProps,
    { changeFoodNumber, finishFood, toggleFoodDetail }
)(FoodDetail);