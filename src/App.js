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
	const [image, setImage] = useState();
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
				const image = data.filter((e) => e.imageUrl !== null).map((m) => <img src={m.imageUrl} alt='' />);
				setGalleryItems(image);
				// setImage(response.tokens[0].imageUrl)
			})
			.catch((err) => console.error(err));
	}
	const responsive = {
		0: { items: 1 },
		1024: { items: 2 },
	};
	// class App extends Component {
	//   	const [searchBar, setSearchBar] = useState();
	// 	  // attempt to display image to gallery
	// 	  const [image, setImage] = useState();
	// 	  // storing response to nft data
	// 	  const [data, setData] = useState();

	// 	constructor(props) {
	// 		super(props);
	// 		this.state = {
	// 			galleryItems: [],
	// 		};
	// 	}

	// 	getData() {
	// 		axios
	// 			.get(
	// 				`https://api.modulenft.xyz/api/v1/opensea/user/tokens?user=${searchBar.wallet}`,
	// 				{}
	// 			)
	// 			.then((res) => {
	// 				const data = res.data;
	// 				const img = data.map((m) => <img src={m.download_url} alt='' />);
	// 				this.setState({
	// 					galleryItems: img,
	// 				});
	// 			})
	// 			.catch((error) => {
	// 				console.log(error);
	// 			});
	// 	}
	// 	responsive = {
	// 		0: { items: 1 },
	// 		1024: { items: 2 },
	// 	};
	// 	componentDidMount() {
	// 		this.getData();
	// 	}

	// render() {
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
							/>
						}></Route>
				</Routes>
			</main>
			{/* <img src={image} alt='image'></img> */}
			<div>
				{galleryItems.length > 0 && (
					<AliceCarousel
						items={galleryItems}
						responsive={responsive}
						autoPlayInterval={2000}
						autoPlayDirection='rtl'
						autoPlay={true}
						fadeOutAnimation={true}
						mouseTrackingEnabled={true}
						disableAutoPlayOnAction={true}
					/>
				)}
			</div>
		</div>
	);
}
// }

export default App;
