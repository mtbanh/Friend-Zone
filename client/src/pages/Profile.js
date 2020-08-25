import React, { Component } from "react";
import "./ProfileStyle.css"
import API from "../utils/API"
// import { client } from "filestack-react";
import ReactFilestack from "filestack-react";


const apiKey = "AXsVOdIjfR3eVPnGtz0CLz"
// const client = filestack.init(apiKey)
let imgURL = "";
const hobbies = []
const friendsList = []


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      bio: "",
      hobby: "",
    };
    this.state = {
      files: [],
    };
  }

  onFiles = ({ filesUploaded }) => {
    this.setState({ files: filesUploaded });
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    const lastName = event.target.lastName;
    const age = event.target.age;
    const bio = event.target.bio;
    const hobby = event.target.hobby;


    // Updating the input's state
    this.setState({
      [name]: value,
      [lastName]: value,
      [age]: value,
      [bio]: value,
      [hobby]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.age && this.state.bio && this.state.hobby) {
      API.createProfile()
    .then(() => {

    })
    .catch(err => console.log(err))
  }
 
    this.setState({
      firstName: "",
      lastName: "",
      age: "",
      bio: "",
      hobby: ""
    });
  };


  render() {
    const { files } = this.state;

    return (
      <div className="container">
        <h1>Profile</h1>
        <hr></hr>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">
              <div>
                <ReactFilestack
                  apikey={apiKey}
                  buttonText="Click me"
                  onSuccess={this.onFiles}
                  preload={true}
                />
              </div>
            </span>
          </div>

          <div>
            <h6 className="greeting"> Upload a Picture </h6>
            {files.map((file, i) => {
              return (
                <div key={i}>
                  <div heading className={'m-3'}>
                    <img className="profilePicture" alt={file.fileName} src={file.url} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* alert pop up when its been created */}
        <div className="col-md-9 profile-info">
          <div className="alert alert-info alert-dismissable">
            <a className="panel-close close" data-dismiss="alert">×</a>
            <i className="fa fa-hand-peace-o"></i>
    Get ready to be freindZoned.
  </div>
          <h3>Profile Info</h3>
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-lg-3 control-label">First name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="textarea"
                  name={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder="Farley"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Last name:</label>
              <div className="col-lg-8">
                <input 
                className="form-control"
                type="textarea"
                value={this.state.lastName} 
                onChange={this.handleChange} 
                placeholder="Bacon"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Age:</label>
              <div className="col-lg-8">
                <input 
                className="form-control" 
                type="text" 
                value={this.state.age} 
                onChange={this.handleChange} 
                placeholder="25"
                />
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
                <input 
                className="form-control" 
                type="text" 
                value={this.state.bio} 
                onChange={this.handleChange} 
                placeholder="I like..."
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label"></label>
              <div className="col-md-8">
                <button class="btn btn-primary" type="submit" onClick={this.handleFormSubmit}>Create Profile</button>
                {/* creat handle submit api.create profile */}
                <span></span>
                <input type="reset" className="btn btn-default" value="Cancel"></input>
              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

export default Profile;