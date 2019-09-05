import React from 'react';
import {
	View,
	Text,
	Dimensions,
	TouchableWithoutFeedback,
	Image
} from 'react-native';
import InstaImage from '../InstaImage';
import { ImagePath } from '../../utils/contants';
import { style, postHeader, post, postFooter } from './styles';

function Post() {
	return (
		<View style={style.container}>
			<View style={style.wrapper}>
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
				<TouchableWithoutFeedback
					onPress={() => {
						alert('more');
					}}
					hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
				>
					<View>
						<Image style={{ width: 15, height: 15 }} source={ImagePath.more} />
					</View>
				</TouchableWithoutFeedback>
			</View>
			<InstaImage
				width={Dimensions.get('window').width}
				source={{
					uri:
						'https://images.unsplash.com/photo-1563076177-1bb11497d137?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
				}}
			/>
			<View style={[style.headerFooter, postFooter.footer]}>
				<TouchableWithoutFeedback
					onPress={() => {
						alert('heart');
					}}
					hitSlop={{ top: 15, bottom: 15, left: 2, right: 2 }}
				>
					<View>
						<Image style={postFooter.image} source={ImagePath.heart} />
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress={() => {
						alert('comment');
					}}
					hitSlop={{ top: 15, bottom: 15, left: 2, right: 2 }}
				>
					<View>
						<Image style={postFooter.image} source={ImagePath.comment} />
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress={() => {
						alert('share');
					}}
					hitSlop={{ top: 15, bottom: 15, left: 2, right: 2 }}
				>
					<View>
						<Image style={postFooter.image} source={ImagePath.share} />
					</View>
				</TouchableWithoutFeedback>
			</View>
			<View style={[post.postLikes, postFooter.footer, postFooter.likeFooter]}>
				<Image style={postFooter.imageLike} source={ImagePath.fillHeart} />
				<Text style={style.postTextBold}>132 likes</Text>
			</View>
		</View>
	);
}

export default Post;
