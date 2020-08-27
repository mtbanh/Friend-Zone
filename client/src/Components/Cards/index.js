import React from "react";
import "./style.css";
// import API from "../utils/API";




const Cards = props =>{
  
  
    return(
        <div className="card" >
        <div className="img-container" style={{display: 'flex', justifyContent: 'center'}}>
          <img alt={props.name} src={props.image} height={200} width={200}/>
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Hobby:</strong> {props.hobbies}
            </li>
          </ul>
        </div>
        <span onClick={() => props.addBuddy(props.id)} className="btn btn-info add">
          Add to Friend Zone!
        </span>
      </div>
    );
}

export default Cards; 

