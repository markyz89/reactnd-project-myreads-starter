import React, {Component} from 'react'
// import ListControl from './ListControl'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookShelf extends React.Component {
	constructor(props) {
		super(props);	
		this.state = {

			books: [],
	}

this.changeShelf = this.changeShelf.bind(this);
	
}

componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ 
        	books: books,
        			 })
         // console.log ("what is at this point?",books)
      })

    }


changeShelf(newShelf, book) {
	// console.log('book 2nd time= ', book)
 // 	console.log('newBookRow 2nd time =', newShelf);
 	let update = this.state.books

 	book.shelf = newShelf

 	console.log("updated object", book)

 	let oldCollection = update.filter(b => b.id != book.id)
 	console.log("old collection = ", oldCollection)

 	let newCollection = oldCollection.concat([book])
 	console.log("new collection = ", newCollection)


 	BooksAPI.update(book, newShelf).then((data) => {
     
    })

 	this.setState({
 		books: newCollection
 	})

 	
 }



	


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
		            	{list != null && 				     				
				     			list.map((book) => (
				     				<Book book={book} onChangeShelf={this.changeShelf}/>
				            	))
				           	
		            	}
		            </ol>
	          </div>
		 </div>
		)
	}
}

export default BookShelf