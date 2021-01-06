import React, { Component } from 'react';
import Header from './layout/Header';
import AddTask from './components/AddTask';
import Todos from './components/Todos';
import './App.css';



class App extends Component {
   state = {
     todos:[
       {
         id:  Math.floor((Math.random()*1000000)+1),
         task:'Learning React for One Hour',
         completed: false
       },
       {
        id:  Math.floor((Math.random()*1000000)+1),
        task:'Attend a zoom meeting',
        completed: false
      },
      {
        id:  Math.floor((Math.random()*1000000)+1),
        task:'Prepare lunch',
        completed: false
      },
      {
        id:  Math.floor((Math.random()*1000000)+1),
        task:'Swimming at Diani beach',
        completed: false
      }
     ]
   }
  
  taskCompleted = (id) =>{
      this.setState({todos: this.state.todos.map(task =>{
        if(task.id===id){
          task.completed = !task.completed
        }
        return task;
      })})
    }
  delTask =(id)=>{
     this.setState({todos: [...this.state.todos.filter(task=>task.id !== id)]});
    }
  addTask =(task)=>{
    const newTask ={
      id: Math.floor((Math.random()*1000000)+1),
      task,
      completed:false
    }
    this.setState({todos: [...this.state.todos, newTask]});
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <AddTask addTask={this.addTask}/>
        <Todos todos= {this.state.todos} taskCompleted={this.taskCompleted} delTask={this.delTask}/>
      </div>
    );
  }
}

export default App;


