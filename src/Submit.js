import React, { Component } from 'react';

class Submit extends Component {
    constructor(props){
        super(props);
        
        this.state = {};
        this.submitReview = this.submitReview.bind(this);
    }
    submitReview(){
        console.log('Submit Review');
    }
    render(){
        return(
            <div className="row">
            <div className="col-xs-12 col-sm12">
        <h1> <br/> Submit</h1>
           <form>
            
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" className="form-control" id="review" placeholder="Enter name of game you want to review?" />
  </div>
            
  <div className="form-group">
    <label htmlFor="Review">Review</label>
    <textarea className="form-control" id="review" placeholder="Leave your review for the game here!" />
            
  </div>
            
    <div className="form-group">
    <label htmlFor="Category">Category</label>
    <input type="text" className="form-control" id="Genre" placeholder="What Genre is the game?" />
            
            
            
   
  </div>
        
     <div className="form-inilne form-group">
    <label htmlFor="hashtag">Tag</label>
    <input type="text" className="form-control" id="tag" placeholder="add a tag?" />
              <button type="submit" className="btn btn-default">Add a Tag</button>

  </div>
        
  <button type="submit" onClick={this.submitReview} className="btn btn-default">Submit</button>
</form>
            </div>
            </div>

        );
            
        
    }
}
export default Submit;