import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { AppHeader, Post } from '../../components';
import { ImagePath } from '../../utils/contants';
import { styles } from './styles';

console.log(ImagePath);

function Home() {
	return (
		<View style={styles.container}>
			<AppHeader>
				<TouchableWithoutFeedback
					onPress={() => {
						alert('camera');
					}}
					hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
				>
					<View>
						<Image style={styles.cameraBtn} source={ImagePath.camera} />
					</View>
				</TouchableWithoutFeedback>
				<Text style={styles.heading}>Instagram</Text>
				<TouchableWithoutFeedback
					onPress={() => {
						alert('message');
					}}
					hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
				>
					<View>
						<Image style={styles.messageBtn} source={ImagePath.message} />
					</View>
				</TouchableWithoutFeedback>
			</AppHeader>
			<Post />
		</View>
	);
}

export default Home;
