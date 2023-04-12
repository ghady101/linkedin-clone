import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import Feed from './Feed';
import { login, selectUser } from './features/counter/userSlice';
import { useSelector } from 'react-redux';
import { Password } from '@mui/icons-material';
import Widget from './Widget';

function App() {
	const user = useSelector(selectUser);

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// logged in
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayname: userAuth.displayName,
						photoURL: userAuth.profile,
					})
				);
			} else {
				// logged out
				dispatch(logout());
			}
		});
	}, []);
	return (
		<div className='app'>
			{/* Header */}
			<Header />
			{!user ? (
				<Login />
			) : (
				<div className='app_body'>
					<Sidebar />
					{/* Feed */}
					<Feed />
					{/* widget */}
					<Widget />
				</div>
			)}
		</div>
	);
}

export default App;
