import React, { Component } from 'react';
import Category from './Category';
import TagList from './TagList';

class Submit extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            
            newReview: {
                name: "Name of Movie",
                review: "Review",
                category: "category",
                tags: []
            }
        };
        this.submitReview = this.submitReview.bind(this);
    }
    submitReview(){
        console.log('Submit Review');
        console.log(this.name.value, this.review.value);
    }
    
    addCategory(genre, tags){
        console.log("Add Category in submit.js", genre, tags);
        let newReview = this.state.newReview;
        newReview.tags.push({genre: genre, tags: tags});
        this.setState({newReview: newReview});
        console.log(newReview);
        
    }
    render(){
        return(
            <div className="row">
            <div className="col-xs-12 col-sm12">
        <h1> <br/> Submit</h1>
            
            
 <form>          
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" 
    ref= {(input) => {this.name = input;}}
    className="form-control" 
    id="name" 
    
    placeholder="Enter name of game you want to review!" />
  </div>
            
  <div className="form-group">
    <label htmlFor="Review">Review</label>
    <textarea className="form-control"
    ref= {(input) => {this.review = input;}}
    id="review" 
    placeholder="Leave your review for the game here!" />
            
  </div>
    <TagList review={this.state.newReview}/>
            
<Category addCategory={(tags, genre) => {this.addCategory(tags, genre)}}/>
  <button type="button" onClick={this.submitReview} className="btn btn-default">Submit</button>
</form>
            </div>
            </div>

        );
            
        
    }
}
export default Submit;