import React from "react";


const Profile = () => {
    return (
        <div className="container">
            <h1>Profile</h1>    
        <hr></hr>
        <div className="col-md-3">
            <div className= "text-center">
            {/* <input type="file" onChange={this.fileChangedHandler}> <button onClick={this.uploadHandler}>Upload!</button> </input> */}
                <img src= {URL ("//placehold.it/100")} className="avatar img-circle" alt ="avater"></img> */}
                 <h6>Upload photo</h6> 
                <input type= "file" className= "form-control"></input>
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