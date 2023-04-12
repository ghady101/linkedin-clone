import React, { forwardRef } from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';

const Post =
	forwardRef[
		({ name, desc, message, photoUrl }, ref) => {
			return (
				<div ref={ref} className='post'>
					<div className='post_header'>
						<Avatar src={photoUrl}>{name[0]}</Avatar>
						<div className='post_info'>
							<h2>{name}</h2>
							<p>{desc}</p>
						</div>
					</div>

					<div className='post_body'>
						<p>{message}</p>
					</div>

					<div className='post_button'>
						<InputOption Icon={ThumbUpIcon} title='like' color='grey' />
						<InputOption Icon={CommentIcon} title='comment' color='grey' />
						<InputOption Icon={ShareIcon} title='share' color='grey' />
						<InputOption Icon={SendIcon} title='send' color='grey' />
					</div>
				</div>
			);
		}
	];

export default Post;
