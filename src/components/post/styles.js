import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
	container: {
		backgroundColor: 'rgb(255, 255, 255)'
	},
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 15
	},
	headerFooter: {
		height: 60,
		flexDirection: 'row',
		alignItems: 'center'
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
		paddingLeft: 20,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row'
	}
});

const postFooter = StyleSheet.create({
	footer: {
		borderBottomColor: 'rgb(210, 210, 210)',
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginHorizontal: 18
	},
	likeFooter: {
		marginHorizontal: 0,
		marginBottom: 10
	},
	image: {
		width: 30,
		height: 30,
		marginRight: 18,
		tintColor: 'rgb(47, 47, 47)'
	},
	imageLike: {
		width: 15,
		height: 15,
		marginRight: 7,
		tintColor: 'rgb(47, 47, 47)'
	}
});

export { style, postHeader, post, postFooter };
