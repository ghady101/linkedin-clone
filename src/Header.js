import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

function Header() {
	const user = useSelector(selectUser);

	const dispatch = useDispatch();

	const logoutOfApp = () => {
		dispatch(Logout());
		auth.signOut();
	};

	return (
		<div className='header'>
			{/* <h1>This is the header</h1> */}
			<div className='header_left'>
				<img
					src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
					alt=''
				/>
				<div className='header_search'>
					{/* search icon */}
					<SearchIcon />
					<input type='text' />
				</div>
			</div>
			<div className='header_right'>
				<HeaderOption Icon={HomeIcon} title='Home' />
				<HeaderOption Icon={SupervisorAccountIcon} title='My Networks' />
				<HeaderOption Icon={WorkIcon} title='Jobs' />
				<HeaderOption Icon={MessageIcon} title='Messages' />
				<HeaderOption Icon={NotificationsIcon} title='Notifications' />
				<HeaderOption avatar={true} title='Me' onClick={logoutOfApp} />
			</div>
		</div>
	);
}

export default Header;
