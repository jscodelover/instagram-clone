import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import LoginFooter from '../LoginFooter';
import OtherOption from '../OtherOption';
import ScreenChange from '../ScreenChange';
import { ImagePath } from '../../../utils/contants';
import { LoginPage } from './style';

function Login(props) {
	const [loginBox, showLogin] = useState(false);
	const [userId, handleUserId] = useState('');
	const [pwd, handlePwd] = useState('');

	return (
		<>
			{loginBox ? (
				<View style={[LoginPage.container, LoginPage.login]}>
					<Text style={LoginPage.header}>Instagram</Text>
					<TextInput
						style={[LoginPage.inputField, LoginPage.pad]}
						onChangeText={text => handleUserId(text)}
						value={userId}
						placeholder='Phone number, email address or username'
						placeholderTextColor='rgb(130, 130, 130)'
						autoCapitalize={'none'}
						autoCorrect={false}
						returnKeyType='next'
					/>
					<TextInput
						style={[LoginPage.inputField, LoginPage.pad]}
						onChangeText={text => handlePwd(text)}
						value={pwd}
						placeholder='Password'
						placeholderTextColor='rgb(130, 130, 130)'
						textContentType='password'
						autoCapitalize={'none'}
						autoCorrect={false}
						returnKeyType='go'
						secureTextEntry={true}
					/>
					<TouchableOpacity
						style={[LoginPage.btnContainer, LoginPage.pad]}
						onPress={() => {
							props.navigation.navigate('Home');
						}}
					>
						<Text style={[LoginPage.textWhite, LoginPage.btnText]}>Log In</Text>
					</TouchableOpacity>

					<ScreenChange
						{...props}
						text='Forgotten your login details?'
						screen='ForgetPwd'
						label='Get help with signing in.'
					/>
					<TouchableOpacity style={LoginPage.fbContainer}>
						<Image
							style={{ width: 20, height: 20 }}
							source={ImagePath.facebook}
						/>
						<Text style={[LoginPage.fbTxt, LoginPage.textBold]}>
							Log in with Facebook
						</Text>
					</TouchableOpacity>
					<OtherOption />

					<ScreenChange
						{...props}
						text="Don't have an account?"
						screen='Register'
						label='Sign Up.'
					/>
				</View>
			) : (
				<View style={[LoginPage.container, LoginPage.entry]}>
					<Text style={LoginPage.header}>Instagram</Text>
					<TouchableOpacity
						style={LoginPage.btnContainer}
						onPress={() => {
							props.navigation.navigate('Register');
						}}
					>
						<Text style={[LoginPage.textWhite, LoginPage.btnText]}>
							Create New Account
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={LoginPage.loginBtn}
						onPress={() => {
							showLogin(true);
						}}
						hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
					>
						<Text style={LoginPage.btnText}>Log In</Text>
					</TouchableOpacity>
				</View>
			)}
			<LoginFooter />
		</>
	);
}

export default Login;