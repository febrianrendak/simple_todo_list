import React from 'react';

export default class Item extends React.Component {
    render() {
        return(
            <li>
                <span onClick={()=> { this.props.toggleMark(this.props.item.id) }} className={ this.props.item.done ? 'item-done' : '' }>{this.props.item.text}</span> <span onClick={() => { this.props.removeItem(this.props.item.id) }}>[x]</span>
            </li>
        )
    }
}
