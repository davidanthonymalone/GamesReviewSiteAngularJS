import React, { Component } from 'react';
const loadreview = [
	{
		'name': 'Fifa',
		'review': 'FIFA 17’s headline feature is The Journey, a story about a prodigious young talent attempting to make a name for himself in the Premier League. It’s a microcosm of everything that’s good and bad about FIFA – peerless presentation surrounding a match engine that’s an improvement on last year, but still needs work – and yet it’s the most fun I’ve had with the series for a good few seasons. Perhaps more importantly, it’s a welcome reminder of the personal stories at the heart of a sport (and a series) that, in recent times, has felt more concerned with its corporate identity. It’s not easy to find ways to surprise people in an annualised game, but this is a very pleasant one.',
		'image': 'http://res.cloudinary.com/dqajckyao/image/upload/v1490198725/wpgn6v9u6jspc1a9ztcx.jpg'
	}
	
];

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
		var gamescheck = JSON.parse(localStorage.getItem('reviews'));
        if (gamescheck === null || gamescheck.length === 0)
            {
                let reviews = this.state.reviews;

reviews.push(loadreview["0"]);

        
		this.setState({reviews});
                		localStorage.setItem('reviews', JSON.stringify(reviews));

            }
        else{
            
            
        }
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
				<div className="col-sm-6 col-md-4" onClick={this.newPage}>
                
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