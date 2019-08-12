import React, { useState } from 'react';
import { Image } from 'react-native';

function InstaImage(props) {
	const [width, handleWidth] = useState(props.width);
	const [height, handleHeight] = useState(props.height);

	Image.getSize(props.source.uri, (w, h) => {
		if (width && height) {
			handleHeight(height);
			handleWidth(width);
		} else if (width && !height) {
			handleHeight(h * (width / w));
			handleWidth(width);
		} else if (!width && height) {
			handleHeight(height);
			handleWidth(w * (height / h));
		} else {
			handleHeight(h);
			handleWidth(w);
		}
	});
	return (
		<Image
			source={props.source}
			style={{ height: height, width: width, ...props.style }}
		/>
	);
}

export default InstaImage;
