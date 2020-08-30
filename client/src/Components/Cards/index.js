import React from "react";
import "./style.css";
// import API from "../utils/API";




const Cards = props => {


  return (
    <div className="card">

      

      <div className="img-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <img alt={props.name} src={props.image} height={250} width={250} />
      </div>
      <div>
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
      <div>
        {/* <button onClick={() => props.addBuddy(props.id)} className="btn btn-info add">
          Add to Friend Zone!
        </button> */}
         <a class="btn btn-small btn-info"
        onClick={() => {
          console.log("Check onclick in card")
          props.addBuddy(props.id)
        }}>
        <i class="fas fa-plus">
        </i>
      </a>
      </div>
     
    </div>

  );
}

export default Cards;

