import React from 'react'
import { Route } from 'react-router-dom'
import BookShelf from './Components/BookShelf'
import Search from  './Components/Search'
import SearchButton from  './Components/SearchButton'


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

  }



}

  render() {
    return (
      <div className="app"> 
        <Route path="/search" render={() => (
          <Search/>
          )}
        />
              <Route path="/" exact render={() => (
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  
                    <BookShelf whichShelf ="currentlyReading" onChange={this.changeShelf} />
                    <BookShelf whichShelf ="wantToRead" onChange={this.changeShelf} />
                    <BookShelf whichShelf ="read" onChange={this.changeShelf}/>
                           
                <SearchButton buttonState={this.displaySearchPage} />
              
              </div>
             )} />

       
       </div>
            )
      }


         
    
      
    }

  export default BooksApp