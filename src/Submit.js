import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Dropzone from 'react-dropzone';
import request from 'superagent';
const CLOUDINARY_UPLOAD_PRESET = 'rwvxi2lv';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dqajckyao/upload';


class Submit extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            reviews: JSON.parse(localStorage.getItem('reviews')) || [],
            
            newReview: {
                name: "Name of Movie",
                review: "Review",
                
            },
            uploadedFileCloudinaryUrl: ''
        };
        this.submitReview = this.submitReview.bind(this);
        this.onImageDrop = this.onImageDrop.bind(this);
    };
    
    onImageDrop(files){
         this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
        
    }
    
    
    handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }
    submitReview(){
        console.log('Submit Review');
        console.log(this.name.value, this.review.value);
        let newReview = this.state.newReview;
        
        newReview.name = this.name.value;
        newReview.review = this.review.value;
        newReview.image = this.state.uploadedFileCloudinaryUrl;
        
        this.setState({newReview});
        let reviews = this.state.reviews;
        reviews.push(newReview);
        this.setState({reviews});
        localStorage.setItem('reviews', JSON.stringify(reviews));
        console.log(reviews)
        browserHistory.push('');
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
            
 <Dropzone
      multiple={false}
      accept="image/*"
      onDrop={this.onImageDrop}>
      <p>Drop an image or click to select a file to upload.</p>
    </Dropzone>
       <div>
        {this.state.uploadedFileCloudinaryUrl === '' ? null :
        <div>
          <p>{this.state.uploadedFile.name}</p>
          <img alt={this.state.uploadedFile.name} src={this.state.uploadedFileCloudinaryUrl} />
        </div>}
      </div>
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" 
    ref={(input) => {this.name=input;}}
    className="form-control" 
    id="name" 
    
    placeholder="Enter name of game you want to review!" />
  </div>
            
  <div className="form-group">
    <label htmlFor="Review">Review</label>
    <textarea className="form-control"
    ref={(input)=>{this.review = input;}}
    id="review" 
    placeholder="Leave your review for the game here!" />
            
  </div>
   
        
  <button type="button" onClick={this.submitReview} className="btn btn-default">Submit</button>
</form>
            </div>
            </div>

        );
            
        
    }
}
export default Submit;