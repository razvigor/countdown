import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../hooks/useCountdown';

const ExpiredNotice = () => {
	return (
		<div className='expired-notice'>
			<p>Sta god kad istekne vrijeme</p>
		</div>
	);
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
	return (
		<div className='show-counter'>
			<DateTimeDisplay
				value={days}
				type={`${days < 2 ? 'Dan' : 'Dana'}`}
				isDanger={days <= 1}
			/>
			<p>:</p>
			<DateTimeDisplay
				value={hours}
				type={`${hours < 21 && hours > 4 ? 'Sati' : 'Sata'}`}
				isDanger={false}
			/>
			<p>:</p>
			<DateTimeDisplay
				value={minutes}
				type={`${minutes > 1 ? 'Minuta' : 'Minut'}`}
				isDanger={false}
			/>
			<p>:</p>
			<DateTimeDisplay
				value={seconds}
				type={`${seconds > 1 ? 'Sekundi' : 'Sekunda'}`}
				isDanger={false}
			/>
		</div>
	);
};

const CountdownTimer = ({ targetDate }) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	if (days + hours + minutes + seconds <= 0) {
		return <ExpiredNotice />;
	} else {
		return (
			<ShowCounter
				days={days}
				hours={hours}
				minutes={minutes}
				seconds={seconds}
			/>
		);
	}
};

export default CountdownTimer;
