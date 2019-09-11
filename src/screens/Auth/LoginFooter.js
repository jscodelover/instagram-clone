import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font } from '../../utils/contants';

function LoginFooter() {
	return (
		<View style={styles.footer}>
			<Text style={styles.footerTxt}>Instagram from Facebook</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		textAlign: 'center',
		height: 50,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'rgb(130, 130, 130)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	footerTxt: {
		color: 'rgb(130, 130, 130)',
		fontFamily: Font.NewsCycle_Bold
	}
});

export default LoginFooter;
