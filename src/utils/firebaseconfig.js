import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDe6Y4wYpnbCm6p6TbIcjyhVagCM99f1UI',
	authDomain: 'instagram-clone-reactnative.firebaseapp.com',
	databaseURL: 'https://instagram-clone-reactnative.firebaseio.com',
	projectId: 'instagram-clone-reactnative',
	storageBucket: '',
	messagingSenderId: '132469773971',
	appId: '1:132469773971:web:b8d3cacd0828b665'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
