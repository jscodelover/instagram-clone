import { StyleSheet } from 'react-native';

const LoginPage = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	entry: {
		height: '90%'
	},
	login: {
		height: '100%'
	},
	header: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 50
	},
	loginBtn: {
		marginTop: 30
	},
	fbContainer: {
		flexDirection: 'row',
		marginTop: 30,
		alignItems: 'center',
		justifyContent: 'center'
	},
	fbTxt: {
		color: 'rgb(62, 152, 236)',
		fontSize: 16,
		marginLeft: 10,
		fontWeight: 'bold'
	}
});

export { LoginPage };
