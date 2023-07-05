import React from 'react';
import CountdownTimer from './components/CountdownTimer';

import './App.css';

export default function App() {
	const dateTimeAfterThreeDays = new Date('July 17, 2023 08:00:00').getTime();

	return (
		<div className='app'>
			<div className='inner'>
				<h1>Odbrojavanje</h1>
				<CountdownTimer targetDate={dateTimeAfterThreeDays} />
			</div>
		</div>
	);
}
