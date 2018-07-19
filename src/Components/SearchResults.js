import React from 'react'


function SearchResults(props) {
	return (

		<div className="search-books-results">
              <ol className="books-grid">
              	{props.searchResults.map((book) => (
              		<h1>{book.title}</h1>


              		))}


              </ol>
        </div>


		)
}

export default SearchResults



