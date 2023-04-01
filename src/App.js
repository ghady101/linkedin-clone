import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
	return (
		<div className='app'>
			{/* Header */}
			<Header />

			{/* App body */}
			<div className='app_body'>
				{/* sidebar */}
				<Sidebar />
				{/* feed */}
				{/* <Feed /> */}
				{/* widget */}
				{/* <Widget /> */}
			</div>
		</div>
	);
}

export default App;
