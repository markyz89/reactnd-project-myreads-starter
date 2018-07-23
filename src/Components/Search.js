
import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import SearchResults from './SearchResults'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      query: ''
    }
    
  }

    updateQuery = (query) => {
    this.setState({query});
    // console.log(query);
    if (query) {
     BooksAPI.search(query).then((searchResults) => {
      if(searchResults.error) {
        this.setState({
        searchResults: []
      });
      } else {
        this.setState({
        searchResults
      });
      }
      
    }) } else {
      this.setState({
        searchResults: []
      });
    }
      // console.log('results =',results)
      // console.log('query =',this.state.query)
    }
  

  

  render() { 


  return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" 
                       placeholder="Search by title or author"
                       value={this.state.query}
                       onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
               {this.state.searchResults != null && (
                <SearchResults searchResults={this.state.searchResults}/> 
              
              
                
                  )}        
         
        </div>
    )
  }
} 


export default Search
