// import {useState} from 'react';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';
import './App.css';
import {useState} from 'react';

function App() {
	const [token, setToken] = useState(null);
	const [authUsername, setAuthUsername] = useState('');

	return (
		<>
			<p>
				{' '}
				<span id='username'>username: </span>
				<span>{authUsername}</span>
			</p>
			<Authenticate token={token} setAuthUsername={setAuthUsername} />
			<SignUpForm setToken={setToken} />
		</>
	);
}

export default App;
