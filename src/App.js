import React from 'react'
import MainPage from './Components/MainPage'
import BookShelf from './Components/BookShelf'

// import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }



}



  render() {
    return (
      <div className="app"> 
         <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
              <BookShelf whichShelf ="Currently Reading" onChange={this.changeShelf} />
              <BookShelf whichShelf ="Want to Read" onChange={this.changeShelf} />
              <BookShelf whichShelf ="Read" onChange={this.changeShelf}/>
          </div>
      </div>
      );
    }


  }
  export default BooksApp