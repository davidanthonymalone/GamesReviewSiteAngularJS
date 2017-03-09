import React, { Component } from 'react';

class Submit extends Component {
    render(){
        return(
            <div className="row">
            <div className="col-xs-12 col-sm12">
        <h1> <br/> Submit</h1>
           <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
  <div className="checkbox">
    <label>
      <input type="checkbox" /> Check me out
    </label>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>
            </div>
            </div>

        );
            
        
    }
}
export default Submit;