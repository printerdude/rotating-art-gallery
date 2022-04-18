import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Search({ searchBar, setSearchBar, handleSearch }) {
	const handleChange = (event) => {
		setSearchBar({ ...searchBar, wallet: event.target.value });
	};
	return (
		<div id='search-container'>
			<form id='form-container' onSubmit={handleSearch}>
				<label htmlFor='searchBarEl'>Search Bar</label>
				<input
					type='text'
					id='searchBarEl'
					onChange={handleChange}
					placeholder='Enter Wallet Address'
				/>
				{/* <button type='submit'>Create</button> */}
				<div className='example-container'>
					<motion.button
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.8 }}
						type='submit'
					/>
					</div> 
			</form>
			{/* <div className='example-container'>
				<motion.div 
					whileHover={{ scale: 1.2 }} 
					whileTap={{ scale: 0.8 }} />
			</div> */}
		</div>
	);
}

export default Search;
