import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
	container: {
		backgroundColor: 'rgb(255, 255, 255)'
	},
	headerFooter: {
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 15
	}
});

const postHeader = StyleSheet.create({
	image: {
		width: 38,
		height: 38,
		borderRadius: 50,
		resizeMode: 'cover',
		marginRight: 10
	},
	nameContainer: {},
	postUser: {
		color: 'rgb(38, 38, 38)',
		fontSize: 14,
		fontWeight: 'bold'
	},
	location: {
		fontSize: 12,
		color: 'rgb(100, 100, 100)'
	}
});

// I want image to have full width and height auto.
const post = StyleSheet.create({
	image: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').width,
		resizeMode: 'cover'
	}
});

const postFooter = StyleSheet.create({
	footer: {
		borderBottomColor: 'rgb(210, 210, 210)',
		borderBottomWidth: StyleSheet.hairlineWidth
	}
});

export { style, postHeader, post, postFooter };
