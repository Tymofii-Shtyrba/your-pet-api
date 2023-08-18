const userSchema = new Schema(
	{
		password: {
			type: String,
			required: [true, 'Password is required'],
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: true,
		},
	},
	{ versionKey: false, timestamps: true }
);

const User = model('user', userSchema);

module.exports = { User };
