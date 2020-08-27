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
              <strong>Hobby:</strong> {props.hobby}
            </li>
          </ul>
        </div>
        <button onClick={() => props.addBuddy} className="btn btn-info add">
          Add to Friend Zone!
        </button>
      </div>
    );
}

export default Cards; 

