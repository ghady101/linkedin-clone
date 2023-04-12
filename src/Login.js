import React, { useState } from 'react';
import './Login.css';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';

function Login() {
	const [email, setEmail] = useState('');
	const [profile, setProfile] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const register = () => {
		if (!name) {
			return alert('please enter full name');
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user.updateprofile({
					displayName: name,
					photoURL: profile,
				});
				then(() => {
					dispatch(
						Login[
							{
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoURL: profile,
							}
						]
					);
				});
			})
			.catch((error) => alert(error));
	};

	const loginToApp = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					Login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						profileURL: userAuth.user.photoURL,
					})
				);
			})
			.catch((error) => alert(error));
	};

	return (
		<div className='login'>
			<img src='' alt='' />
			<form action=''>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type='text'
					placeholder='full name requiered if registered'
				/>
				<input
					value={profile}
					onChange={(e) => setProfile(e.target.profile)}
					type='text'
					placeholder='profile pic url'
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='text'
					placeholder='email'
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type='password'
					placeholder='password'
				/>
				<button type='submit' onClick={loginToApp}>
					Sign In
				</button>
				<p>
					Not a member?
					<span className='login_register' onClick={register}>
						Register now
					</span>
				</p>
			</form>
		</div>
	);
}

export default Login;
