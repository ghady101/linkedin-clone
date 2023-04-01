import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar_top'>
				<img src='' alt='' />
				<Avatar className='sidebar_avatar' />
				<h2>Ghady Gergie</h2>
				<h4>gahdygergie0@gmail.com</h4>
			</div>

			<div className='siebar_stats'>
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
			</div>
		</div>
	);
}

export default Sidebar;
