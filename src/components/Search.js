import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Search({ searchBar, setSearchBar, handleSearch }) {
	const handleChange = (event) => {
		setSearchBar({ ...searchBar, wallet: event.target.value });
	};
	return (
		<div id='search-container'>
			<form id='formContainer' onSubmit={handleSearch}>
				<label htmlFor='searchBarEl'>Search Bar</label>
				<input
					type='text'
					id='searchBarEl'
					onChange={handleChange}
					placeholder='Enter Wallet Address'
				/>
				<button type='submit'>Create</button>
			</form>
		</div>
	);
}

export default Search;
