import {StyleSheet} from 'react-native'
import {PURPLE, WHITE, BLACK} from '../../constant';

export const styles = StyleSheet.create({
    Header: {
        position: 'absolute',
        top: 0,
        left:0,
        width: 400,
        height: 200,
        alignContent:'flex-start',
        backgroundColor: PURPLE,
      },
    HeaderBlock: {
      top: 30,
      left: 10,
      alignSelf: 'flex-start',
      textAlign: 'left'
    },
    FoodList: {
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        top: 200,
      },
    FoodDetailWindow: {
      position: 'absolute',
      borderRadius: 15,
      alignSelf: 'center',
      marginTop: 150,
      width:300,
      height:600,
      opacity:0.9,
      backgroundColor: WHITE,
      shadowColor: BLACK,
      shadowOpacity: 0.7,
      shadowRadius: 6,
    },
    detailContainer: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    FoodTitle: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    img: {
      width: 70,
      height: 70,
    },
    imgBox: {
      marginBottom:7,
      alignSelf: 'center',
    },
    cornerButton: {
      position: 'absolute',
      top: 720,
      left: 260,
    },
    XButton: {
      left: 130,
    },
})