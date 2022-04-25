interface dateValue {
	time: string;
	weekdays: string;
}

export const getDayFromDt = (dt: number): dateValue => {
	const weekdays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const d = new Date(dt * 1000 ?? 0);
	const year = d.getFullYear();
	const month = d.getMonth() + 1;
	const date = d.getDate();
	const day = d.getDay();

	return {
		time: `${padLeadingZeros(date)} - ${padLeadingZeros(month)} - ${year}`,
		weekdays: weekdays[day],
	};
};
export const getTimeFromDt = (dt: number): string => {
	let d = new Date(dt * 1000 ?? 0);
	let hours = d.getHours();
	let minutes = d.getMinutes();
	let ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	let minutesNum: number =
		Number(minutes) < 10 ? 0 + Number(minutes) : Number(minutes);
	return `${padLeadingZeros(hours)} : ${padLeadingZeros(minutesNum)} ${ampm}`;
};

function padLeadingZeros(num: number, size: number = 2) {
	let s = num + '';
	while (s.length < size) s = '0' + s;
	return s;
}



