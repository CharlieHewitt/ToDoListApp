import React, { Component } from "react";

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);

        this.state = {
            items: []
        };

    }

    addItem(e) {
        var itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
        }

        console.log(itemArray);

        e.preventDefault();

    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="enter a task"></input>
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ToDoList;
