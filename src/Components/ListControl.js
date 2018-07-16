import React, {Component} from 'react'


class ListControl extends React.Component {
	constructor (props) {
		super(props);

// this.moveToCurrentlyReading	= this.moveToCurrentlyReading.bind(this)

	}

	// moveToCurrentlyReading() {
 //  		console.log('move it');
	// }

	render() {
	return (
		<select>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
		)
	}
}

export default ListControl