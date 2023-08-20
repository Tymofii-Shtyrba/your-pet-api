const createLetter = (email, token) => {
	return {
		to: email,
		from: 'timofeyshtyrba@gmail.com',
		subject: 'Test mail',
		html: `<a href="http://localhost:3000/api/users/verify/${token}">Verfy account</a>`,
	};
};

module.exports = createLetter;
