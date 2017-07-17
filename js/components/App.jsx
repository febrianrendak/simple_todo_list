import React from 'react';
import PropTypes from 'prop-types';
import List from './List.jsx';
import Form from './Form.jsx';
import FormTodo from '../containers/FormTodo.js';
import ListTodo from '../containers/ListTodo.js';

class App extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Simple To Do List</h3>
                        <FormTodo />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Active</h3>
                        <ListTodo filter={ item => !item.done } />
                        <h3>Done</h3>
                        <ListTodo filter={ item => item.done } />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
