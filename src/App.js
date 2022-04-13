import './App.css';
// import React, { Component } from 'react';
// import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
	const [searchBar, setSearchBar] = useState();
	// attempt to display image to gallery
	// const [image, setImage] = useState();
	// storing response to nft data
	const [data, setData] = useState();
	const [galleryItems, setGalleryItems] = useState([]);

	function handleSearch(event) {
		event.preventDefault();
		const options = { method: 'GET', headers: { Accept: 'application/json' } };

		fetch(
			`https://api.modulenft.xyz/api/v1/opensea/user/tokens?user=${searchBar.wallet}`,
			options
		)
			.then((response) => response.json())
			// .then((response) => console.log(response))
			.then((response) => {
				// console.log(response.tokens[0])
				console.log(response.tokens);
				const data = response.tokens;
				const image = data
					.filter((e) => e.imageUrl !== null)
					.map((m) => <img src={m.imageUrl} alt='' />);
				setGalleryItems(image);
				console.log(image);
				// setImage(response.tokens[0].imageUrl)
			})
			.catch((err) => console.error(err));
	}
	const responsive = {
		0: { items: 1 },
		1024: { items: 2 },
	};

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
							<Home
								searchBar={searchBar}
								setSearchBar={setSearchBar}
								handleSearch={handleSearch}
								galleryItems={galleryItems}
								setGalleryItems={setGalleryItems}
								responsive={responsive}
								data={data}
								setData={setData}
							/>
						}></Route>
				</Routes>
			</main>
			{/* <img src={image} alt='image'></img> */}
		</div>
	);
}
// }

export default App;
