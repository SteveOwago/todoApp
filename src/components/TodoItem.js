import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class TodoItem extends Component {
    getStyle = () =>{
        return{
            align:'center',
            background: this.setBackgroundColor(),
            borderBottom: '2px #ccc dotted',
            margin:'10px',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
           }
        }
    // Function changes the body background color for every refresh
     setBackgroundColor= () =>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
    }
    
    
    render() {
        
        const {task,id} = this.props.todo ;
        return (
            <div style={this.getStyle()}>
                
                        <input type="checkbox" onChange={this.props.taskCompleted.bind(this, id)}/> {' '}
                        {task} <button onClick={this.props.delTask.bind(this,id)} style={buttonDeleteStyle}>X</button>
                      
                    
            </div>
        )
    }
}

//Proptypes of todo
TodoItem.propType = {
    todo:PropTypes.object.isRequired
}
// styling for the delete button
const buttonDeleteStyle= {
    background: '#ff0000',
    color: '#fff', 
    float: 'right',
    border: 'none',
    borderRadius: '20%',
    padding: '3px 5px',
    cursor: 'pointer'
}
export default TodoItem
