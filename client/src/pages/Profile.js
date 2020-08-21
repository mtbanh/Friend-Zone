import React from "react";
import "./ProfileStyle.css"
import API from "../utils/API"

const Profile = () => {
    return (
        <div className="container">
            <h1>Profile</h1>    
        <hr></hr>
        <div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroupFileAddon01">
      Upload
    </span>
  </div>
  <div className="custom-file">
    <input
      type="file"
      className="custom-file-input"
      id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01"
    />
    <label className="custom-file-label" htmlFor="inputGroupFile01">
      Choose file
    </label>
  </div>
</div>
{/* alert pop up when its been created */}
<div className= "col-md-9 profile-info">
<div className="alert alert-info alert-dismissable">
          <a className="panel-close close" data-dismiss="alert">×</a> 
         <i className="fa fa-hand-peace-o"></i>
          Get ready to be freindZoned.
        </div>
 <h3>Create Info</h3>
 <form className="form-horizontal">
 <div className="form-group">
 <label className="col-lg-3 control-label">First name:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" value="Farley"></input>
            </div>
 </div>
 <div className="form-group">
            <label className="col-lg-3 control-label">Last name:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" value="Bacon"></input>
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-3 control-label">Age:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" value="25"></input>
            </div>
          </div>        
          <div className="form-group">
            <label className="col-lg-3 control-label">Hobby:</label>
            <div className="col-lg-8">
              <div className="ui-select">
                <select id="user_time_zone" className="form-control">
                  <option value="Scale Miniature Building">Scale Miniature Building</option>
                  <option value="Rock climbing">Rock clmbing</option>
                  <option value="Swimming">Swimming</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Running">Running</option>
                  <option value="Snowboarding">Snowbarding</option>
                  <option value="Baseball">Baseball</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 control-label">Bio:</label>
            <div className="col-md-8">
              <input className="form-control" type="text" value="I like..."></input>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 control-label"></label>
            <div className="col-md-8">
              <input type="button" className="btn btn-primary" value="Create Profile"></input>
              <span></span>
              <input type="reset" className="btn btn-default" value="Cancel"></input>
            </div>
          </div>
     </form>    
</div>
        </div>
    );
};

export default Profile;