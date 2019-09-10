import { StyleSheet } from 'react-native';
import { Font } from '../../utils/contants';

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		backgroundColor: 'rgb(250,250, 250)'
	},
	cameraBtn: {
		width: 30,
		height: 30
	},
	heading: {
		fontSize: 22,
		fontFamily: Font.DancingScript_Bold
	},
	messageBtn: {
		width: 22,
		height: 22,
		tintColor: 'rgb(47, 47, 47)'
	}
});

export { styles };
