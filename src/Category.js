import React, { Component } from 'react';


class Category extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {};
        this.addCategory = this.addCategory.bind(this);
    }
    
    addCategory(){
        console.log('Category added');
         console.log(this.tags.value, this.genre.value);
        this.props.addCategory(this.tags.value, this.genre.value);

    }
    render() {
		return (
			<div className="form-inline form-group">
		    <label htmlFor="tags">Tags</label>
		    <input type="text" 
		    				className="form-control" 
		    				id="tags" 
		    				ref={(input) => {this.tags = input;}}
		    				placeholder="Tags" />
		    <label htmlFor="ingredient">Genre</label>
		    <input type="text" 
		    				className="form-control" 
		    				ref={(input) => {this.genre = input;}}
		    				id="genre" 
		    				placeholder="genre" />
		    <button type="button" onClick={this.addCategory} className="btn btn-info">Add</button>
		  </div>
		);
	}
}
export default Category;