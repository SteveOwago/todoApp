import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTask extends Component {
    state = {
        task: ''
    }
    formStyle = () =>{
        return{
            align:'center',
            display: 'flex',
            margin:'10px',
           }
        }
    // Function changes the body background color for every refresh
     setBackgroundColor= () =>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
    }
    
   onTask = (e) =>this.setState({[e.target.name]: e.target.value});
   onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task:""});
}
   
    render() {
        return (
            <form onSubmit={this.onSubmit} id='add_taskform' style={this.formStyle()}>
                <input type="text" name="task" value={this.state.onTask} onChange={this.onTask} style={{flex:'10',padding:'5px'}}placeholder="New Task" required/>
                <input type="submit" style={submitButtonStyle} value="Submit"/>
            </form>
        )
    }
}

//Proptypes of todo
AddTask.propType = {
    todo:PropTypes.object.isRequired
}
// styling for the delete button
const submitButtonStyle= {
    background: '#98FB98',
    color: '#fff', 
    float: 'right',
    border: 'none',
    padding: '3px 5px',
    cursor: 'pointer',
    flex:'1'
}

export default AddTask;