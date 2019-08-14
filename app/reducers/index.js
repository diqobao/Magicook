import { combineReducers } from 'redux';
import {ADD_FOOD, TOGGLE_ADD_FOOD, TOGGLE_FOOD_DETAIL, CHANGE_FOOD_NAME, CHANGE_FOOD_NUMBER, FINISH_FOOD} from '../constant'

const initialState = {
    allIds: [0,1,2,3],
    foodStorage: {
      0: {id: 0, name: "a", img: require("../static/img/food1.png"), number:3, days: 0, maxDays: 10, addDate: '2019-08-01', finished: false},
      1: {id: 1, name: "b", img: require("../static/img/food1.png"), number:1, days: 5, maxDays: 10, addDate: '2019-08-03', finished: false},
      2: {id: 2, name: "c", img: require("../static/img/food1.png"), number:2, days: 5, maxDays: 12, addDate: '2019-08-05', finished: false},
      3: {id: 3, name: "d", img: require("../static/img/food1.png"), number:1, days: 5, maxDays: 10, addDate: '2019-08-07', finished: false},
    },
    showFoodDetail: false,
    showAddFood: false,
    foodDetailID: null, //TODO: delete
    foodDetail: {},
};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FOOD: {
        const { id, content } = action.payload;
        return {
          ...state,
          foodStorage: {
              ...state.foodStorage, 
              [id]: {
                id: id,
                name: content.name,
                img: content.img,
                number: content.number,
                maxDays: content.maxDays,
                days: 0,
                finished: false,
                addDate: Date.now()
              }
          },
          allIds: [...state.allIds, id],
          foodDetail: {},
        };
      };
      case TOGGLE_ADD_FOOD: {
        if(state.showAddFood) {
          return {
            ...state,
            showAddFood: !state.showAddFood,
          };
        }else{
          return {
            ...state,
            showAddFood: !state.showAddFood,
            foodDetail: {name: "ookjopi", img: require("../static/img/food1.png"), number:1, maxDays: 10},
          };
        }
      };
      case TOGGLE_FOOD_DETAIL: {
        const { id } = action.payload;
        return {
          ...state,
          showFoodDetail: !state.showFoodDetail,
          foodDetail: state.foodStorage[id],
        };
      };
      case CHANGE_FOOD_NAME: {
        const { id, name, newFood } = action.payload;
        if(newFood) {
          return {
            ...state,
            foodDetail: {
              ...state.foodDetail,
              name: name
            }
          };
        }else{
          return {
            ...state,
            foodStorage: {
              ...state.foodStorage,
              [id]: {
                ...state.foodStorage[id],
                name: name
              }
            },
            foodDetail: {
              ...state.foodDetail,
              name: name
            }
          };
        };
      };
      case CHANGE_FOOD_NUMBER: {
        const { id, increment, newFood } = action.payload;
        if(newFood) {
          return {
            ...state,
            foodDetail: {
              ...state.foodDetail,
              number: state.foodDetail.number + increment
            }
          };
        }else{
          return {
            ...state,
            foodStorage: {
              ...state.foodStorage,
              [id]: {
                ...state.foodStorage[id],
                number: state.foodStorage[id].number + increment
              }
            },
            foodDetail: {
              ...state.foodDetail,
              number: state.foodDetail.number + increment
            }
          };
        };
      };
      case FINISH_FOOD: {
        const { id } = action.payload;
        return {
          ...state,
          foodStorage: {
              ...state.foodStorage, 
              [id]: {
                ...state.foodStorage[id],
                finished: true,
              }
          },
          // allIds: [...state.allIds, id],
        };
      };
      default:
        return state;
    }
  };
  
export default combineReducers({
  rootState: foodReducer,
});
