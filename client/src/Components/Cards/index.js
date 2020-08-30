import React from "react";
import "./style.css";
// import API from "../utils/API";




const Cards = props =>{
  
  
    return(
        <div className="card" >
        <div className="img-container cardpic" style={{display: 'flex', justifyContent: 'center'}}>
          <img alt={props.name} src={props.image} height={250} width={250}/>
        </div>
        <div className="content">
          <ul>
            <p>
              <strong>Name:</strong> {props.name}
            </p>
            <p>
              <strong>Age:</strong> {props.age}
            </p>
            <p>
              <strong>Hobby:</strong> {props.hobby}
            </p>
            <p>
              <strong>Bio:</strong> {props.bio}
            </p>
          </ul>
        </div>
        <button onClick={() => props.addBuddy(props.id)} className="btn btn-info add">
          Add to Friend Zone!
        </button>
      </div>
    );
}

export default Cards; 

