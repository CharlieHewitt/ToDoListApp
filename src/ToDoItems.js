import React, { Component } from "react";

class ToDoItems extends Component {
    constructor(props) {
        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        var todoEntries = this.props.enties;
        var listItems = todoEntries.map(this.createTasks);
        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default ToDoItems;