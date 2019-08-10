import React from 'react';
import { View, Text, Image } from 'react-native';
import { style, postHeader, post, postFooter } from './styles';

function Post() {
	return (
		<View style={style.container}>
			<View style={style.headerFooter}>
				<Image
					style={postHeader.image}
					source={{
						uri:
							'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
					}}
				/>
				<View style={postHeader.nameContainer}>
					<Text style={postHeader.postUser}>Jscodelover</Text>
					<Text style={postHeader.location}>delhi</Text>
				</View>
			</View>
			<Image
				style={post.image}
				source={{
					uri:
						'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
				}}
			/>
			<View style={[style.headerFooter, postFooter.footer]}>
				<Text>like</Text>
				<Text>comment</Text>
				<Text>share</Text>
			</View>
		</View>
	);
}

export default Post;
