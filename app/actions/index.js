import {
    ADD_FOOD, 
    TOGGLE_ADD_FOOD, 
    TOGGLE_FOOD_DETAIL, 
    CHANGE_FOOD_NAME,
    CHANGE_FOOD_NUMBER,
    FINISH_FOOD,
} from '../constant'

let nextFoodId = 4;

export const mapStateToProps = (state) => {
    const { rootState } = state;
    return { rootState }
};

export const addFood = content => (
    {
        type: ADD_FOOD,
        payload: {
            id: ++nextFoodId,
            content
        },
    }
);

export const finishFood = id => (
    {
        type: FINISH_FOOD,
        payload: { id },
    }
);

export const toggleAddFood = () => (
    {
        type: TOGGLE_ADD_FOOD,
    }
);

export const toggleFoodDetail = id => (
    {
        type: TOGGLE_FOOD_DETAIL,
        payload: { id }
    } 
);

export const changeFoodName = (id, name, newFood) => (
    {
        type: CHANGE_FOOD_NAME,
        payload: { id, name, newFood }
    } 
);

export const changeFoodNumber = (id, increment, newFood) => (
    {
        type: CHANGE_FOOD_NUMBER,
        payload: { id, increment, newFood }
    } 
);