import React from 'react'
import { Link } from 'react-router-dom'


function SearchButton (props) {
return (
	<div className="open-search">
		<Link
			to = "/search"
			onClick={props.buttonState}>Add a book
		</Link>
	</div>

	)
}

export default SearchButton
