import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import GlobalStle from '../../utils/globalStyle';
import { Common, B1 } from './style';

function CustomButton(props) {
	const { type, style, onPress, label, styleText } = props;
	switch (type) {
		case 1:
			return (
				<TouchableOpacity style={[B1.wrapper, style]} onPress={onPress}>
					<Text style={[GlobalStle.textWhite, GlobalStle.btnText, styleText]}>
						{label}
					</Text>
				</TouchableOpacity>
			);
	}
}

export default CustomButton;
