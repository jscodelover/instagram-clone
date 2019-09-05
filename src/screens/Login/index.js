import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoginPage } from './style';

function Login(props) {
	return (
		<View style={LoginPage.container}>
			<Text style={LoginPage.header}>Instagram</Text>
			<TouchableOpacity
				style={LoginPage.registerBtnContainer}
				onPress={() => {
					props.navigation.navigate('register');
				}}
			>
				<Text style={[LoginPage.textWhite, LoginPage.btnText]}>
					Create New Account
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={LoginPage.loginBtn}
				onPress={() => {
					props.navigation.navigate('App');
				}}
				hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
			>
				<Text style={LoginPage.btnText}>Login</Text>
			</TouchableOpacity>
		</View>
	);
}

export default Login;
