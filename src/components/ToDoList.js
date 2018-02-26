import React, {Component} from 'react';



class SingleToDo extends Component {

    triggerPropFunc = (e) => {
        return this.props.click(e.target.id);
        // alert(this.props.id);
    }

    render() {
        return(
        <li>
            <div>{this.props.id+1}.  {this.props.name}<span className="remove" onClick={this.triggerPropFunc} id={this.props.id}>X</span></div>
        </li>
        );
    }

}

class TodoList extends Component {

    deleteTriggerHandler = (id) => {
        return this.props.removeClick(id);
        // alert(id);

    };

    render() {
        let todos = this.props.alltodo.map((todo, i) =>
        <SingleToDo name={todo} key={i} id={i} click={this.deleteTriggerHandler} />);
        return (<ul className="ToDoList" >
            {todos}
        </ul>
        );
    }
}

export default TodoList;