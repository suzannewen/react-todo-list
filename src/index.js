;(function() {

'use strict'

class ToDoItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            done: false
        }
    }

    render() { return (
        <li id="task${_taskId++}">
            <i className="check glyphicon glyphicon-check" onClick={(e) => this.setState( {done: !this.state.done} )}></i>
            <span className={(this.state.done) ? "completed" : ""}>{this.props.text}</span>
            <i className="destroy glyphicon glyphicon-remove" onClick={(e) => this.props.remove()}></i>
        </li>
    )}
}

class ToDos extends React.Component {

    constructor(props) {
        super(props)
        this.nextId = 2;
        this.state = {
            todoItems: [
                {id:0, text:"Your to-do items"} ]};
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(e) {
        const text = this.newTODO.value;
        this.setState({ todoItems: [
                ...this.state.todoItems, 
                { id:this.nextId++, text:text }
            ]
        })
    }

    removeTodo(removeId) {
        this.setState({ 
            todoItems: this.state.todoItems.filter(({id, text}) => id != removeId)
        })
    }

    render() { return (
        <div>
            <input id="newTODO" type="text" placeholder="New To Do" ref={ (node) => this.newTODO = node }></input>
            <button onClick={this.addTodo}>Add item</button>
            <ul className="todo">
                { this.state.todoItems.map((x) => <ToDoItem key={x.id} text={x.text} remove={() => this.removeTodo(1)} /> ) }
            </ul>
        </div>
    )}
}

ReactDOM.render(<ToDos/>, document.getElementById('app'));

})()
