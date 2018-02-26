import React, {Component} from 'react';

class Form extends Component {
    handleForm = (e) => {
        e.preventDefault();

        if (this.refs.todo.value) {
            this
                .props
                .click(this.refs.todo.value);
            this.refs.todo.value = '';
        }

    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleForm}>
                    <input type="text" autoCorrect placeholder="Type here..." ref="todo"/>
                    <input type="submit" value="Go!"/>
                </form>
            </div>
        );
    }
}

export default Form;