import React from 'react';
import { View, Text } from 'react-native';
import { AppHeader, Post } from '../../components';
import { styles } from './styles';

function Home() {
	return (
		<View style={styles.container}>
			<AppHeader>
				<Text>d</Text>
				<Text>jhsgfjhd</Text>
				<Text>er</Text>
			</AppHeader>
			<Post />
		</View>
	);
}

export default Home;
