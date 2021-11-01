import React, { Component } from "react";
import "./style.css";

function toDoItem(props){
    return (
      <div>
        <li>
          <p>{props.task.name}</p>
          <p
            className="edit"
            onClick={() => props.handleEdit(props.task.id)}
          >
            Edit
          </p>
          <h5
            className="remove"
            onClick={() => props.handleDelete(props.task.id)}
          >
            X
          </h5>
        </li>
      </div>
    );
  }
export default toDoItem;
