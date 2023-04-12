import React, { useState, useEffect } from 'react';
import './Feed.css';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import EventIcon from '@mui/icons-material/Event';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { db } from './Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function Feed() {
	const [input, setInput] = useState('');
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection('posts').onSnapShot((snapshot) =>
			setPosts(
				snapshot.docs.map((doc) => ({
					doc: doc.id,
					data: doc.data(),
				}))
			)
		);
	}, []);

	const sendPost = (e) => {
		db.collection('posts').add({
			name: userEvent.displayName,
			description: user.email,
			message: input,
			photoUrl: user.photoUrl || '',
			timestamp: firebase.firestore.fieldValue.serverTimestamp(),
		});
		e.preventDefault();
	};
	return (
		<div className='feed'>
			<div className='feed_inputContainer'>
				<div className='feed_input'>
					<CreateIcon />
					<form action=''>
						<input
							type='text'
							value={input}
							onChange={(e) => setInput[e.target.value]}
						/>
						<button type='submit' onClick={sendPost}>
							Send
						</button>
					</form>
				</div>
				<div className='feed_inputOptions'>
					<InputOption Icon={ImageIcon} title='photo' color='#7805F9' />
					<InputOption
						Icon={SubscriptionsIcon}
						title='subscription'
						color='#7805F9'
					/>
					<InputOption Icon={EventIcon} title='event' color='#7805F9' />
					<InputOption
						Icon={CalendarMonthIcon}
						title='calender'
						color='#7805F9'
					/>
				</div>
			</div>

			<FlipMove>
				{posts.map((post) => {
					<Post />;
				})}
				{/* posts */}
				<Post
					name='Ghady Gergie'
					desc='this is a test'
					message='Wow this worked'
				/>
			</FlipMove>
		</div>
	);
}

export default Feed;
