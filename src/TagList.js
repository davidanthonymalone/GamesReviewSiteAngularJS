import React, { Component } from 'react';

class Home extends Component {
    displayReviews(){
        let resultsArray = [];
        this.props.category.category.map((item, i) => {
            
            resultsArray.push(<li>{item.genre} - {item.tags}</li>);
        });
            return resultsArray;
    }
    render(){
        return(
           
            <ul>
            {this.displayReviews()};
            </ul>
        );
            
        
    }
}
export default Home;