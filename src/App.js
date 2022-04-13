import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
	const [searchBar, setSearchBar] = useState();

	function handleSearch(event) {
		event.preventDefault();
		const options = { method: 'GET', headers: { Accept: 'application/json' } };

		fetch(
			`https://api.modulenft.xyz/api/v1/opensea/user/tokens?user=${searchBar.wallet}`,
			options
		)
			.then((response) => response.json())
			.then((response) => console.log(response.tokens[0]))
			.catch((err) => console.error(err));
	}

	return (
		<div className='app-container'>
			<nav>
				<Link id='homeLink' to='/'>
					<img
						src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png'
						alt='home icon'
					/>
					<h1> Rotating Art Gallery</h1>
				</Link>
			</nav>
			<main>
				<Routes>
					<Route
						path='/'
						element={
							<Home searchBar={searchBar} setSearchBar={setSearchBar} handleSearch={handleSearch} />
						}></Route>
				</Routes>
			</main>
      {/* <img src={response.tokens[0].name} alt='image'></img> */}
		</div>
	);
}

export default App;
