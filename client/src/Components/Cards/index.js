import React from "react";
import "./style.css";





// function matches () 


const Cards = props =>{
    return(
        <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Mutual Hobbies:</strong> {}
            </li>
          </ul>
        </div>
        <span onClick={() => props.addFriend(props.id)} className="add">
          +
        </span>
      </div>
    );
}

export default Cards; 

{/* <div className="card text-center">
<div className="overflow">
    <img alt={props.name} src={props.image}/>
</div>
<div ClassName="card-body">
    <h4 className="card-title">{props.name}</h4>
    <h6 className="card-text text-secondary">
        Mutual Hobbies: {props.mutualhobbies}
    </h6>
    <a href="#" className="btn btn-outline-success">Add to FriendZone</a>
</div>
</div> */}