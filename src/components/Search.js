import React from 'react';
import { useState } from 'react';

function Search({ searchBar, setSearchBar, handleSearch }) {
    const handleChange = (event) => {
        setSearchBar ({...searchBar, wallet: event.target.value})
    }
	return (
		<div>
			<form id='formContainer' onSubmit={handleSearch}>
				<label htmlFor='menuEl'> Search Bar</label>
				<input
					type='text'
					id='menuEl'
					onChange={handleChange}
					value={searchBar.menuEl}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default Search;
