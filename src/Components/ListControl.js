import React, {Component} from 'react'

class ListControl extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const newBookRow = e.target.value;
		const bookKey = this.props.bookKey;
		const bookImg = this.props.bookImg;
		const bookAuthor = this.props.bookAuthor;
		
		// console.log(this.props.shelf)
		this.props.onChangeShelf(newBookRow, bookKey, bookImg, bookAuthor);
		
		// console.log(e.target);
	}

	render() {
		return (
			<select onChange={this.handleChange}>
	            <option value="move" disabled>Move to...</option>
	            <option value="Currently Reading">Currently Reading</option>
	            <option value="Want to Read">Want to Read</option>
	            <option value="Read">Read</option>
	            <option value="none">None</option>
        	</select>
			)
		}

}
	

export default ListControl