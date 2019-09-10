import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function ScreenChange(props) {
	const { text, screen, label } = props;
	return (
		<View style={styles.OtherLinkContainer}>
			<Text style={styles.plainText}>{text}</Text>
			<TouchableOpacity
				onPress={() => {
					props.navigation.navigate(screen);
				}}
			>
				<Text style={styles.textBold}> {label}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	OtherLinkContainer: {
		flexDirection: 'row'
	},
	plainText: {
		color: 'rgb(120, 120, 120)'
	},
	textBold: {
		fontWeight: 'bold'
	}
});

export default ScreenChange;
