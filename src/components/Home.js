import React from 'react';
import Search from './Search';

function Home({ searchBar, setSearchBar, handleSearch }) {
	return (
		<div>
			Home
			<Search
				searchBar={searchBar}
				setSearchBar={setSearchBar}
				handleSearch={handleSearch}
			/>
		</div>
	);
}

export default Home;
