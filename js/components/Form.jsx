import React form 'react';

export default class Form extends React.Component {
    render() {
        <form action="">
            <div className="col-md-6">
                <div className="form-group">
                    <label for="item">Item</label>
                    <input type="text" className="form-control" id="item" name="item" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <div className="btn btn-md btn-success" id="submit-item">Submit</div>
                </div>
            </div>
        </form>
    }
}
