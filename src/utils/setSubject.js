const setSubject = (song) => {
	let subject = '';
	switch (song) {
		case 'I Believe In Miracles':
		case 'To Be Found Faithful':
			subject = `${song} download from Connie Cahill`;
			break;
		case 'Both':
			subject =
				'I Believe In Miracles and To Be Found Faithful download from Connie Cahill';
			break;
		default:
			subject = '';
	}
	return subject;
};

export default setSubject;
