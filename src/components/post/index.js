import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import InstaImage from '../InstaImage';
import { style, postHeader, post, postFooter } from './styles';

function Post() {
	return (
		<View style={style.container}>
			<View style={style.headerFooter}>
				<InstaImage
					style={postHeader.image}
					width={38}
					height={38}
					source={{
						uri:
							'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
					}}
				/>
				<View>
					<Text style={style.postTextBold}>Jscodelover</Text>
					<Text style={postHeader.location}>delhi</Text>
				</View>
			</View>
			<InstaImage
				width={Dimensions.get('window').width}
				source={{
					uri:
						'https://images.unsplash.com/photo-1563076177-1bb11497d137?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
				}}
			/>
			<View style={[style.headerFooter, postFooter.footer]}>
				<Text>like</Text>
				<Text>comment</Text>
				<Text>share</Text>
			</View>
			<View style={[post.postLikes, postFooter.footer]}>
				<Text style={style.postTextBold}>132 likes</Text>
			</View>
		</View>
	);
}

export default Post;
