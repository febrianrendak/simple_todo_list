import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const ITEM_STRUCT = {
    item: {
        text: '',
        id: '',
        done: false
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = Object.assign({}, ITEM_STRUCT)
        this.__handleItemChange = this.__handleItemChange.bind(this)
        this.__handleSubmit = this.__handleSubmit.bind(this)
    }

    __handleSubmit(event) {
        event.preventDefault();
        if(this.state.item.text.trim()) {
            let item = Object.assign({}, this.state.item, {id: moment().format('x')})
            this.setState(Object.assign({}, ITEM_STRUCT))
            this.props.onClickSubmitItem(item)
        }
    }

    __handleItemChange(event) {
        let item = Object.assign({}, this.state.item)
        this.setState({item})
        item.text = event.target.value
    }

    render() {
        return(
            <form onSubmit={this.__handleSubmit}>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="item">Item</label>
                        <input autoComplete="off" type="text" className="form-control" id="item" name="item" value={this.state.item.text} onChange={this.__handleItemChange} /> </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="btn btn-md btn-success" id="submit-item" onClick={this.__handleSubmit}>Submit</div>
                    </div>
                </div>
            </form>
        )
    }
}

Form.propTypes = {
    onClickSubmitItem: PropTypes.func.isRequired
}

export default Form
