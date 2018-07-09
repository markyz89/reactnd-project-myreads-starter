import React, {Component} from 'react'
import ListControl from './ListControl'



function CurrentlyReading (props) {

	return (
		 <div className="bookshelf">
	          <h2 className="bookshelf-title">Currently Reading</h2>
		          <div className="bookshelf-books">
		            <ol className="books-grid">
						{props.list.map((book) => (
							<li key={book.title}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.img})` }}></div>

										{}
										<div className="book-shelf-changer">
											<ListControl />
										</div> }

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


export default CurrentlyReading

