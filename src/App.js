/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import Home from './screens/Home';

const AppStack = createStackNavigator({ Home });
const AuthStack = createStackNavigator(
	{ Login, Register },
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false
		}
	}
);

const App = createAppContainer(
	createSwitchNavigator(
		{
			AppScreen: AppStack,
			AuthScreen: AuthStack
		},
		{
			initialRouteName: 'AuthScreen'
		}
	)
);
export default App;
