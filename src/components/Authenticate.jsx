import {useState} from 'react';

// eslint-disable-next-line react/prop-types
export default function Authenticate({token, setAuthUsername}) {
	const [successMessage, setSuccessMessage] = useState(null);
	const [error, setError] = useState(null);
	const handleClick = async () => {
		try {
			const response = await fetch(
				'https://fsa-jwt-practice.herokuapp.com/authenticate',
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const data = await response.json();
			setSuccessMessage(data);
			console.log(data?.data?.username);
			setAuthUsername(data.data.username);
		} catch (err) {
			setError(err);
		}
	};
	return (
		<>
			<h2>Authenticate</h2>
			{error && <p>{error.message}</p>}
			{successMessage && <p>{successMessage.message}</p>}
			<button onClick={handleClick}>Authenticate</button>
		</>
	);
}
