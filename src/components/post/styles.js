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
	},

	postTextBold: {
		color: 'rgb(38, 38, 38)',
		fontSize: 14,
		fontWeight: 'bold'
	}
});

const postHeader = StyleSheet.create({
	image: {
		borderRadius: 50,
		resizeMode: 'cover',
		marginRight: 10
	},
	location: {
		fontSize: 12,
		color: 'rgb(100, 100, 100)'
	}
});

const post = StyleSheet.create({
	image: {
		resizeMode: 'cover'
	},
	postLikes: {
		height: 45,
		marginLeft: 18,
		justifyContent: 'center'
	}
});

const postFooter = StyleSheet.create({
	footer: {
		borderBottomColor: 'rgb(210, 210, 210)',
		borderBottomWidth: StyleSheet.hairlineWidth
	}
});

export { style, postHeader, post, postFooter };
