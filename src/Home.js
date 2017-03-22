import React, { Component } from 'react';


function searchingFor(term){
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class Home extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            
            reviews: JSON.parse(localStorage.getItem('reviews')) || [],
            term: '',
        
        
        };
        
        this.searchHandler = this.searchHandler.bind(this);
    }
    
    searchHandler(event){
        this.setState({term: event.target.value})
        
    }
      delete(review){
    const newState = this.state.reviews;
    if (newState.indexOf(review) > -1) {
      newState.splice(newState.indexOf(review), 1);
      this.setState({reviews: this.state.reviews});
      reviews: JSON.parse(localStorage.setItem("reviews", JSON.stringify(this.state.reviews)));
    }
     }
    
    	displayReviews() {
		let resultsArray = [];
            
            

          
		this.state.reviews.filter(searchingFor(this.state.term)).map((review, i) => {
                
			resultsArray.push(
				<div className="col-sm-6 col-md-4">
                
					<div className="thumbnail">
						 <img src={review.image} alt={review.name}/>
                             <div class="caption">
                       
                        <p>...</p>
                        <p> <button type="button" onClick={this.delete.bind(this, review)} className="btn btn-danger btn-xs">Delete</button></p>
                      </div>
			        <h3>{review.name}</h3>
			        <p>{review.review}</p>
			      </div>
                
				</div>
                
				);
		});

		return resultsArray;
	}
    render(){
        return(
            <div>
           
            <h1>  <br/> Home</h1>
            <form>
                <input type="text" placeholder="Search"
                    onChange={this.searchHandler}/>
                </form>
           {this.displayReviews()}
            </div>
        );
            
        
    };
}
export default Home;