import React from 'react';

export default class Item extends React.Component {
    render() {
        return(
            <li className="item">
                <span onClick={()=> { this.props.toggleMark(this.props.item.id) }} className={ this.props.item.done ? 'item-done item-text' : 'item-text' }>
                    {this.props.item.text}
                </span>
                <div className="item-delete btn btn-xs btn-danger" onClick={() => { this.props.removeItem(this.props.item.id) }}>
                    <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                </div>
            </li>
        )
    }
}
