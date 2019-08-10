import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

function AppHeader(props) {
	const { children } = props;
	return <View style={styles.headerContainer}>{children}</View>;
}

export default AppHeader;
