import React, {Component} from 'react'
import ListControl from './ListControl'
import * as BooksAPI from '../BooksAPI'

class BookShelf extends React.Component {
	constructor(props) {
		super(props);	
		this.state = {

			books: [],
	}

// this.changeShelf = this.changeShelf.bind(this);
	
}

componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ 
        	books: books,
        			 })
         console.log (books)
      })

    }


// changeShelf(newShelf, key, img, author) {
// 	// 	 console.log('bookKey = ', key)
//  // console.log('newBookRow =', newShelf);

//  	}
	


render () {

let list = this.state.books.filter(book => book.shelf === this.props.whichShelf);

	return (
		 <div className="bookshelf">

	          <h2 className="bookshelf-title">

	          	{this.props.whichShelf === "currentlyReading" ? "Currently Reading" :
		 		 this.props.whichShelf === "wantToRead" ? "Want to Read" : "Read"
		 		}

	          </h2>
		          <div className="bookshelf-books">
		            <ol className="books-grid">
		     			
						{list.map((book) => (
							<li key={book.title}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>									
										<div className="book-shelf-changer">
											{/*<ListControl onChangeShelf = {this.changeShelf} shelf={book.shelf} bookKey = {book.title} bookImg={book.img} bookAuthor={book.author}/> */}
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

