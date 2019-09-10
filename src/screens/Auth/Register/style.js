import { StyleSheet } from 'react-native';

const RegisterPage = StyleSheet.create({
	container: {
		marginTop: 80,
		alignItems: 'center',
		height: '100%',
		width: '100%'
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
		marginTop: 0,
		height: 50,
		textAlign: 'center',
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'rgb(130, 130, 130)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	regOption: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		paddingHorizontal: 20,
		marginBottom: 20
	},
	optionBtn: {
		width: '50%',
		borderBottomWidth: 1,
		paddingBottom: 10,
		alignItems: 'center'
	},
	phoneContainer: {
		borderColor: 'rgb(150, 150, 150)',
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: 'rgb(248, 248, 248)',
		width: '90%',
		marginBottom: 15,
		fontSize: 16,
		paddingVertical: 13,
		paddingHorizontal: 20,
		flexDirection: 'row'
	},
	prefix: {
		color: 'rgb(120, 120, 120)',
		fontWeight: 'bold',
		borderColor: 'rgb(150, 150, 150)'
	},
	bar: {
		borderColor: 'rgb(150, 150, 150)',
		borderWidth: StyleSheet.hairlineWidth,
		marginHorizontal: 10
	},
	msg: {
		color: 'rgb(130, 130, 130)',
		fontSize: 12,
		paddingHorizontal: 20,
		marginBottom: 15,
		textAlign: 'center'
	}
});

export { RegisterPage };
