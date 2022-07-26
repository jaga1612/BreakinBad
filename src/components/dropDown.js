import React, { useState } from "react";

const Dropdown = function (props) {
  const[show,setShow] = useState("")
   return (
    <div>
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" onClick={()=>{setShow(show?"":"show")}} type="button">
    {props.perPage}
  </button>
  <ul className={`dropdown-menu ${show}`}>
    <li><button onClick={()=>{
      setShow("");
      props.setPerPage(5);
      }} className="dropdown-item" type="button">5</button></li>
    <li><button onClick={()=>{
      setShow("");
      props.setPerPage(10);
      }} className="dropdown-item" type="button">10</button></li>
    <li><button onClick={()=>{
      setShow("");
      props.setPerPage(20);
      }} className="dropdown-item" type="button">20</button></li>
  </ul>
</div>
    </div>
  );
};

export default Dropdown;
