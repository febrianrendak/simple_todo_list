import React from 'react';
import List from './List.jsx';
import Form from './Form.jsx';
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
        let item = Object.assign({}, this.state.item)
        item.text = event.target.value
        this.setState({
            item: item
        })
    }

    __onClickSubmitItem(event) {
        event.preventDefault()

        let item = Object.assign({}, this.state.item)
        item.id = moment().format('x')

        this.setState({
            todoList: [ ...this.state.todoList, item ]
        })

        console.log('item submitted:', item)

        this.setState({
            item: {
                text: '',
                id: null,
                done: false
            }
        })
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Simple To Do List</h3>
                        <Form
                            item={this.state.item}
                            handleItemFieldChange={this.__handleItemFieldChange}
                            onClickSubmitItem={this.__onClickSubmitItem}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Active</h3>
                        <List todoList={this.state.todoList.filter((item) => { return !item.done })} toggleMark={this.__toggleMark} removeItem={this.__removeItem} />
                        <h3>Done</h3>
                        <List todoList={this.state.todoList.filter((item) => { return item.done })} toggleMark={this.__toggleMark} removeItem={this.__removeItem} />
                    </div>
                </div>
            </div>
        )
    }
}
