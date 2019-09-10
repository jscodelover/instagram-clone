import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import GlobalStle from '../../utils/globalStyle';
import { Common, B1 } from './style';

function CustomButton(props) {
	const { type, style, onPress, label, styleText, underlayColor } = props;
	switch (type) {
		case 1:
			return (
				<TouchableHighlight
					style={[B1.wrapper, style]}
					onPress={onPress}
					underlayColor={underlayColor || 'rgb(8, 104, 191)'}
				>
					<Text style={[GlobalStle.textWhite, GlobalStle.btnText, styleText]}>
						{label}
					</Text>
				</TouchableHighlight>
			);
	}
}

export default CustomButton;
