import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import './Sidebar.css';

function Sidebar() {
	const user = useSelector(selectUser);

	const recentItems = (topic) => {
		<div className='sidebar_recentItem'>
			<span className='sidebar_hash'>#</span>
			<p>{topic}</p>
		</div>;
	};

	return (
		<div className='sidebar'>
			<div className='sidebar_top'>
				<img
					src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Fstories%2F2020%2F09%2F18%2Fgradient-color-blur-tutorial&psig=AOvVaw3K9Fn_V3ieEN0_ML0o8mAl&ust=1680539271747000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiHjOrOi_4CFQAAAAAdAAAAABAJ'
					alt=''
				/>
				<Avatar src={user.photoURL} className='sidebar_avatar'>
					{/* if no icon we get the first letter */}
					{user.Email[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.Email}</h4>
			</div>

			<div className='sidebar_stats'>
				<div className='sidebar_stat'>
					<p>Who viewed you</p>
					<p className='sidebar_statNumber'>2,543</p>
				</div>
				<div className='sidebar_stat'>
					<p>Views on post</p>
					<p className='sidebar_statNumber'>2,448</p>
				</div>
			</div>

			<div className='sidebar_bottom'>
				<p>Recent</p>
				{recentItems('C++')}
				{recentItems('Software Engineer')}
				{recentItems('JavaScript')}
				{recentItems('Developer')}
				{recentItems('MongoDB')}
			</div>
		</div>
	);
}

export default Sidebar;
