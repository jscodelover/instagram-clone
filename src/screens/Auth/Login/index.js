import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { InputBox, CustomButton } from '../../../components';
import LoginFooter from '../LoginFooter';
import OtherOption from '../OtherOption';
import ScreenChange from '../ScreenChange';
import { ImagePath } from '../../../utils/contants';
import GlobalStyle from '../../../utils/globalStyle';
import { LoginPage } from './style';

function Login(props) {
	const [loginBox, showLogin] = useState(false);
	const [userId, handleUserId] = useState('');
	const [pwd, handlePwd] = useState('');

	function handleNavigation(location) {
		props.navigation.navigate(location);
	}

	return (
		<>
			{loginBox ? (
				<View style={[LoginPage.container, LoginPage.login]}>
					<Text style={LoginPage.header}>Instagram</Text>
					<InputBox
						type={1}
						handlechange={text => handleUserId(text)}
						val={userId}
						placeholder='Phone number, email address or username'
						placeholderTextColor='rgb(130, 130, 130)'
						autoCapitalize={'none'}
						autoCorrect={false}
						returnKeyType='next'
					/>
					<InputBox
						type={1}
						handlechange={text => handlePwd(text)}
						val={pwd}
						placeholder='Password'
						placeholderTextColor='rgb(130, 130, 130)'
						textContentType='password'
						autoCapitalize={'none'}
						autoCorrect={false}
						returnKeyType='go'
						secureTextEntry={true}
					/>
					<CustomButton
						type={1}
						style={[GlobalStyle.btnPad, GlobalStyle.mb12]}
						onPress={() => handleNavigation('Home')}
						label='Log In'
					/>
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
					<CustomButton
						type={1}
						onPress={() => handleNavigation('Register')}
						label='Create New Account'
					/>
					<TouchableOpacity
						style={LoginPage.loginBtn}
						onPress={() => {
							showLogin(true);
						}}
						hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
					>
						<Text style={GlobalStyle.btnText}>Log In</Text>
					</TouchableOpacity>
				</View>
			)}
			<LoginFooter />
		</>
	);
}

export default Login;
