import React from "react";
import ReactDOM from "react-dom";

var fname = "Dumpeti";
var lname = "Charith";
var rollno = "10";
ReactDOM.render(
  <div>
    <h1>Hello My first name is {fname}</h1>
    <h1>Hello My last name is {lname}</h1>
    <h1>
      Hello My full name is {fname} {lname}
    </h1>
    <h1>Hello My full name is {fname + " " + lname}</h1>
    <p>My roll number is {rollno}</p>
    <p>My roll number is {rollno * 2}</p>
    <p>My roll number is {rollno - 5}</p>
    <p>My roll number is {rollno + 5}</p>
    <p>My roll number is {rollno / 5}</p>
  </div>,
  document.getElementById("root")
);
