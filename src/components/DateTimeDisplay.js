import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
	const strFromVal = value.toString();
	return (
		<div className={isDanger ? 'countdown danger' : 'countdown'}>
			<p>{strFromVal.padStart(2, '0')}</p>
			<span>{type}</span>
		</div>
	);
};

export default DateTimeDisplay;
