import React from 'react';
import Item from './Item.jsx';

export default class List extends React.Component {
    render() {
        return(
            <ul id="list-item">
                { this.props.todoList.map((item, index) => { return <Item toggleMark={this.props.toggleMark} removeItem={this.props.removeItem} key={index} item={item} /> })}
            </ul>
        )
    }
}
