import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { InputBox, CustomButton } from '../../../components';
import ScreenChange from '../ScreenChange';
import GlobalStyle from '../../../utils/globalStyle';
import { ImagePath } from '../../../utils/contants';
import { RegisterPage } from './style';

function Register(props) {
	const [type, handleType] = useState(1);
	const [mobile, handleMobile] = useState('');
	const [email, handleEmail] = useState('');
	return (
		<>
			<View style={RegisterPage.container}>
				<Image source={ImagePath.profile} style={{ width: 200, height: 200 }} />
				<View style={RegisterPage.regOption}>
					<TouchableOpacity
						style={[
							RegisterPage.optionBtn,
							type === 2 && RegisterPage.inactiveOption
						]}
						onPress={() => handleType(1)}
					>
						<Text style={[type === 2 && RegisterPage.inactiveText]}>
							PHONE NUMBER
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							RegisterPage.optionBtn,
							type === 1 && RegisterPage.inactiveOption
						]}
						onPress={() => handleType(2)}
					>
						<Text style={[type === 1 && RegisterPage.inactiveText]}>
							EMAIL ADDRESS
						</Text>
					</TouchableOpacity>
				</View>
				{type === 1 ? (
					<>
						<View style={RegisterPage.phoneContainer}>
							<Text style={RegisterPage.prefix}>IN +91</Text>
							<Text style={RegisterPage.bar} />
							<InputBox
								type={2}
								handlechange={text => handleMobile(text)}
								val={mobile}
								placeholder='Phone number'
								placeholderTextColor='rgb(130, 130, 130)'
								autoCapitalize={'none'}
								autoCorrect={false}
								returnKeyType='next'
								keyboardType='number-pad'
							/>
						</View>
						<Text style={RegisterPage.msg}>
							You may receive SMS updates from Instagram and can opt out at any
							time
						</Text>
						<CustomButton
							type={1}
							style={[GlobalStyle.btnPad, !mobile && GlobalStyle.lightBlue]}
							onPress={() => console.log('phone no.')}
							label='Next'
						/>
					</>
				) : (
					<>
						<InputBox
							type={1}
							handlechange={text => handleEmail(text)}
							val={email}
							placeholder='Email address'
							placeholderTextColor='rgb(130, 130, 130)'
							autoCapitalize={'none'}
							autoCorrect={true}
							returnKeyType='next'
							keyboardType='email-address'
						/>
						<CustomButton
							type={1}
							style={[GlobalStyle.btnPad, !email && GlobalStyle.lightBlue]}
							onPress={() => console.log('email')}
							label='Next'
						/>
					</>
				)}
			</View>
			<View style={RegisterPage.footer}>
				<ScreenChange
					{...props}
					text='Already have an account'
					screen='Login'
					label='Log in.'
				/>
			</View>
		</>
	);
}

export default Register;
