import React, {Component} from 'react';
import Form from './components/Form'
import ToDoList from "./components/ToDoList";
import './App.css';

class App extends Component {
    state = {
        toDos: []
    };

    addToDo = (newToDo) => {
        this.setState(prevState => ({
            toDos: [
              newToDo,
                ...prevState.toDos
            ]
        }));
    }
    removeToDo = (i) => {
        let alltodo = [...this.state.toDos];
        alltodo.splice(i, 1);
        this.setState({toDos: alltodo});

    }

    render() {
        return (
            <div className="App">
                <h1>To-Do App<small>v 1.0.0</small></h1>
                <Form click={this.addToDo}/>
                <div >
                    <ToDoList alltodo={this.state.toDos} removeClick={this.removeToDo}/>
                </div>
            </div>
        );
    }
}

export default App;
