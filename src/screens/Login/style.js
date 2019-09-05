import { StyleSheet } from 'react-native';

const LoginPage = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '90%'
	},
	header: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 50
	},
	registerBtnContainer: {
		width: '90%',
		marginBottom: 30,
		backgroundColor: 'rgb(62, 152, 236)',
		padding: 10,
		borderRadius: 4
	},
	btnText: {
		textAlign: 'center',
		fontSize: 18
	},
	textWhite: {
		color: 'rgb(255, 255, 255)'
	}
});

export { LoginPage };
