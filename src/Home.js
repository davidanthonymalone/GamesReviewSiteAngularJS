import React, { Component } from 'react';

class Home extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            
            reviews: JSON.parse(localStorage.getItem('reviews')) || []};
    }
    
    
    
    
    	displayReviews() {
		let resultsArray = [];

		this.state.reviews.map((review, i) => {
			resultsArray.push(
				<div className="col-sm-6 col-md-4">
					<div className="thumbnail">
						
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
           {this.displayReviews()}
            </div>
        );
            
        
    };
}
export default Home;