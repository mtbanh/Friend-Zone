import React from "react";
import "./style.css";
// import API from "../utils/API";




const Cards = props =>{
  
  
    return(
        <div className="card" >
        <div className="img-container" style={{display: 'flex', justifyContent: 'center'}}>
          <img alt={props.name} src={props.image} height={250} width={250}/>
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Age:</strong> {props.age}
            </li>
            <li>
              <strong>Hobby:</strong> {props.hobby}
            </li>
            <li>
              <strong>Bio:</strong> {props.bio}
            </li>
          </ul>
        </div>
        <button onClick={() => props.addBuddy(props.id)} className="btn btn-info add">
          Add to Friend Zone!
        </button>
      </div>
    );
}

export default Cards; 

