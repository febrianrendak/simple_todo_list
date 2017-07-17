import React from 'react';
import PropTypes from 'prop-types';
import ItemTodo from '../containers/ItemTodo.js';

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: this.props.filter
        }
    }

    render() {
        return(
            <ul id="list-item">
                { this.props.todos.filter(this.props.filter).map((item, index) => { return <ItemTodo key={index} item={item} /> })}
            </ul>
        )
    }
}

List.propTypes = {
    todos: PropTypes.array.isRequired
}

export default List
