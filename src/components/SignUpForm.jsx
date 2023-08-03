import {useState} from 'react';

// eslint-disable-next-line react/prop-types
const SignUpForm = ({setToken}) => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				'https://fsa-jwt-practice.herokuapp.com/signup',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						username: userName,
						password: password,
					}),
				}
			);

			const result = await response.json();
			setToken(result.token);
			setPassword('');
			setUserName('');
		} catch (err) {
			setError(err.message);
		}
	};
	return (
		<>
			<h2>Sign Up!</h2>
			{error && <p>{error}</p>}

			<form
				action=''
				onSubmit={handleSubmit}
				method='POST'
				// autoComplete='on'
			>
				<label htmlFor='userUsername'>Username:</label>
				<input
					type='text'
					name='userUsername'
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					placeholder='username'
					autoComplete='username'
					minLength='8'
				/>
				<label htmlFor='userPassword'>Password:</label>
				<input
					type='password'
					name='userPassword'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='password here'
					autoComplete='current-password'
				/>
				<button type='submit'>Submit</button>
			</form>
		</>
	);
};

export default SignUpForm;
