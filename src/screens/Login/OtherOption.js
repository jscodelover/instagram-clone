import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function OtherOption() {
	return (
		<View style={styles.container}>
			<View style={styles.hrLine}></View>
			<Text style={styles.txt}>OR</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 40,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	},
	hrLine: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: 'rgb(180, 180, 180)',
		width: '80%'
	},
	txt: {
		position: 'absolute',
		paddingHorizontal: 10,
		backgroundColor: 'rgb(255, 255, 255)',
		color: 'rgb(180, 180, 180)',
		fontSize: 18
	}
});

export default OtherOption;
