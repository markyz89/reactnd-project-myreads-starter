import React, {Component} from 'react'
import ListControl from './ListControl'


class BookShelf extends React.Component {
	constructor(props)	{
		super(props);
}

// changeShelf() {
// 	console.log('change the shelf')
// } Move to new BookShelf component which is direct parent of list control

render () {

	return (
		 <div className="bookshelf">
	          <h2 className="bookshelf-title">{this.props.whichShelf}</h2>
		          <div className="bookshelf-books">
		            <ol className="books-grid">
						{this.props.list.map((book) => (
							<li key={book.title}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.img})` }}></div>

									
										<div className="book-shelf-changer">
											<ListControl onChangeShelf = {this.changeShelf} />
										</div> 

										</div>
								</div>

								<div className="book-title">{book.title}</div>
                          		<div className="book-authors">{book.author}</div>
									
							</li>
							))}
		            </ol>
	          </div>
		 </div>
		)
	}
}

export default BookShelf

