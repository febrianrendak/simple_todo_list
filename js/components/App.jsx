import React from 'react';
import List from './List.jsx';
import moment from 'moment';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            item: {
                text: '',
                done: false,
                id: null
            },
            todoList: []
        }


        this.__handleItemFieldChange = this.__handleItemFieldChange.bind(this)
        this.__onClickSubmitItem = this.__onClickSubmitItem.bind(this)
        this.__removeItem = this.__removeItem.bind(this)
        this.__toggleMark = this.__toggleMark.bind(this)
    }

    __removeItem(id) {
        this.setState({
            todoList: this.state.todoList.filter((item) => { return item.id !== id })
        })
    }

    __toggleMark(id) {
        this.setState((prevState, props) => {
            let newTodoList = [...this.state.todoList]
            let index = newTodoList.findIndex((item) => { return item.id === id })
            newTodoList[index].done = !newTodoList[index].done
            return({todoList: newTodoList})
        })
    }

    __handleItemFieldChange(event) {
        this.setState({
            item: {
                text: event.target.value,
                id: moment().format('x'),
                done: false
            }
        })
    }

    __onClickSubmitItem(event) {
        event.preventDefault()

        this.setState({
            todoList: [ ...this.state.todoList, this.state.item ]
        })

        console.log('item submitted:', this.state.item)

        this.setState({item: { text: '' }})
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Simple To Do List</h3>
                        <form onSubmit={this.__onClickSubmitItem}>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="item">Item</label>
                                    <input autoComplete="off" type="text" className="form-control" id="item" name="item" value={this.state.item.text} onChange={this.__handleItemFieldChange} /> </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="btn btn-md btn-success" id="submit-item" onClick={this.__onClickSubmitItem}>Submit</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Active</h3>
                        <List todoList={this.state.todoList.filter((item, index) => { return !item.done })} toggleMark={this.__toggleMark} removeItem={this.__removeItem} />
                        <h3>Done</h3>
                        <List todoList={this.state.todoList.filter((item) => { return item.done })} toggleMark={this.__toggleMark} removeItem={this.__removeItem} />
                    </div>
                </div>
            </div>
        )
    }
}
