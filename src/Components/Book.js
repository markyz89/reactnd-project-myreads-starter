import React from 'react'
import ListControl from './ListControl'


class Book extends React.Component {
	constructor(props) {
	super(props);

	// this.state = {
	// 	shelf: ''		
	// }
	this.changeShelf = this.changeShelf.bind(this)
	// this.carrierFunction = this.carrierFunction.bind(this)

}

	// componentDidMount() {
	// 	const book = this.props.book
	// 	this.setState({
	// 		shelf: book.shelf
	// 	})
	// 	console.log(book.shelf, 'has books!')
	// }



changeShelf(newShelf, book) {
	 console.log('book first time = ', book)
	 console.log('newBookRow first time =', newShelf);
	 if (this.props.onChangeShelf) {
		this.props.onChangeShelf(newShelf, book);
	}
}


	render () {
		const book = this.props.book
return (
			<li key={book.title}>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>									
						<div className="book-shelf-changer">
							<ListControl onChangeShelf = {this.changeShelf} book={book}/>
						</div> 

					</div>
				</div>

				<div className="book-title">{book.title}</div>
          		<div className="book-authors">{book.author}</div>
					
			</li>
			
			)
		}
	}

export default Book

// What determines what shelf the book is on?

// it is the state of the books array which is in Bookshelf.js
// should I move that API call down to books and then pass it up to Bookshelf in a method? 
// Yes. So the book's state will be determined in book. 
// Then I can pass the value up to bookshelf to determine which shelf by
// matching against whichShelf