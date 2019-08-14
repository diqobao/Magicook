import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HomeScreen from './views/HomeView';
import FridgeScreen from './views/FridgeView';
import CommunityScreen from './views/CommunityView';
import store from './lib/store'


const appNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    Fridge: {
      screen: FridgeScreen,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    Community: {
      screen: CommunityScreen,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
  });

appNavigator.navigationOptions = {
  header: null,
};

let Navigation = createAppContainer(appNavigator);

// Render the app container component with the provider around it
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}