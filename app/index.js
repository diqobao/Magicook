import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './views/HomeView';
import FridgeScreen from './views/FridgeView';
import CommunityScreen from './views/CommunityView';

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

export default createAppContainer(appNavigator);