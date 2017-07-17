import React from 'react';

export default class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.onClickSubmitItem}>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="item">Item</label>
                        <input autoComplete="off" type="text" className="form-control" id="item" name="item" value={this.props.item.text} onChange={this.props.handleItemFieldChange} /> </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="btn btn-md btn-success" id="submit-item" onClick={this.props.onClickSubmitItem}>Submit</div>
                    </div>
                </div>
            </form>
        )
    }
}
