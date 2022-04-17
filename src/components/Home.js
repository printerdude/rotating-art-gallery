import React from 'react';
import Search from './Search';
import Gallery from './Gallery';


function Home({
	searchBar,
	setSearchBar,
	handleSearch,
	galleryItems,
	setGalleryItems,
    responsive,

}) {
	return (
		<div id='home-container'>
			<Search
				searchBar={searchBar}
				setSearchBar={setSearchBar}
				handleSearch={handleSearch}
			/>
			<Gallery
				
				galleryItems={galleryItems}
				setGalleryItems={setGalleryItems}
				responsive={responsive}
			/>
		</div>
	);
}

export default Home;
