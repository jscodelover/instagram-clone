import { StyleSheet } from 'react-native';

const LoginPage = StyleSheet.create({
	textWhite: {
		color: 'rgb(255, 255, 255)'
	},
	pad: {
		paddingVertical: 13,
		paddingHorizontal: 20
	},
	textBold: {
		fontWeight: 'bold'
	},
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
	btnContainer: {
		width: '90%',
		backgroundColor: 'rgb(62, 152, 236)',
		padding: 10,
		borderRadius: 4
	},
	loginBtn: {
		marginTop: 30
	},
	btnText: {
		textAlign: 'center',
		fontSize: 18
	},
	inputField: {
		borderColor: 'rgb(150, 150, 150)',
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: 'rgb(248, 248, 248)',
		width: '90%',
		marginBottom: 15,
		fontSize: 16
	},
	OtherLinkContainer: {
		marginTop: 12,
		flexDirection: 'row'
	},
	plainText: {
		color: 'rgb(120, 120, 120)'
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
		marginLeft: 10
	}
});

export { LoginPage };
