import React, { Component } from 'react';
import { Tasks } from '../api/tasks';
 
// Task component - represents a single todo item
export default class Task extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      deleted:false
    };
  } 
  
  deleteTask() {
    this.setState({deleted:true});
    setTimeout(()=>{
      Tasks.remove(this.props.task._id);
    },300);
  }
  
  render() {
    return (
      <li className={this.state.deleted?'deleted':''}>
        <button className="delete" onClick={this.deleteTask.bind(this)}>&times;</button>        
        <span>{this.props.task.text}</span>
      </li>
    );
  }
}