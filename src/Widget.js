import React from 'react';
import './Widget.css';
import InfoIcon from '@mui/icons-material/Info';
import { FiberManualRecord } from '@mui/icons-material';

function Widget() {
	const newsArticle = (heading, subtitle) => {
		<div className='widgets_article'>
			<div className='wigdets_articleleft'>
				<FiberManualRecord />
			</div>
			<div className='wdigets_articleRight'>
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>;
	};

	return (
		<div className='widgets'>
			<div className='widgets_header'>
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle('Practice react', 'zero to hero -first clone-')}
		</div>
	);
}

export default Widget;
