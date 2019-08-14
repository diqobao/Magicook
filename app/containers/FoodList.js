import React from 'react';
import {
    FlatList,
    StyleSheet,
  } from 'react-native';
import { connect } from 'react-redux';

import {mapStateToProps, toggleFoodDetail} from '../actions'
import {FoodItemSimple} from './FoodItem';


class FoodList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        displayMode: 'gird' ,
      }
    };
    _keyExtractor = (item, index) => index;
    _renderItem = ({item}) => (
      <FoodItemSimple
        img={item.img}
        freshness={item.days/item.maxDays}
        id={item.id}
        onPressFunc={()=>this.props.toggleFoodDetail(item.id)}
      />
    );
    
    _MapStateToList = (foodStorage) => {
      return Object.keys(foodStorage).map(function(key){
        return foodStorage[key];
      }).filter((food) => !food.finished);
    };
  
    render() {
        return (
          <FlatList style={styles.girdView} data={this._MapStateToList(this.props.rootState.foodStorage)}
            numColumns={3}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
          // <ScrollView style={styles.girdView}>
          //   {
          //   this.state.foodStorage.map((item, index) => (
          //     <FoodItemSimple img={require(item.img)}/>
          //   ))
          //   }
          // </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  girdView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 30,
  },
})

export default connect(
  mapStateToProps,
  { toggleFoodDetail }
)(FoodList);