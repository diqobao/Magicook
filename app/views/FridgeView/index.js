import React from 'react';
import {
    View,
    Text,
  } from 'react-native';
import { connect } from 'react-redux';

import {mapStateToProps, toggleAddFood} from '../../actions';
import {BigAddButton, GoBackButton} from '../../containers/Buttons';
import FoodList from '../../containers/FoodList';
import AddFood from './AddFood';
import FoodDetail from './foodDetail';
import {styles} from './style'

class FridgeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    };

    _openFoodDetail = () => {
        this.setState({ showFoodDetail: true });
    }

    render() {
        return (
        <View style={{alignItems: "center"}}>
            {/* <ImageBackground source={require('../../static/img/homebg.png')} style={{width: '100%', height: '100%'}}> */}
            <View style={styles.Header}>
                <View style={styles.HeaderBlock}>
                    <GoBackButton onPress={() => this.props.navigation.navigate('Home')}/>
                    <Text>FRIDGE</Text>                
                </View>
            </View>
            <View style={{top:100}}>
                <FoodDetail 
                    food={this.props.rootState.foodDetail}
                    />
                <AddFood 
                    food={this.props.rootState.foodDetail}
                    />
            </View>
            <View style={styles.FoodList}>
                <FoodList/>
            </View>
            <View style={styles.cornerButton}>
                <BigAddButton title={'Add new item'} onPressFunc={()=>{this.props.toggleAddFood()}}/> 
            </View>            
            {/* </ImageBackground> */}
        </View>
        );
    }
}

export default connect(
    mapStateToProps,
    { toggleAddFood }
)(FridgeScreen);