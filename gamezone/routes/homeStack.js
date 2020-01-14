import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDeatils from '../screens/reviewDetails';

const screens = {
    Home:{
        screen: Home
    },
    ReviewDetails:{
        screen: ReviewDeatils
    },
}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);