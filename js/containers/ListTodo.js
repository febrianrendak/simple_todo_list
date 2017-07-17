import { connect } from 'react-redux';
import List from '../components/List.jsx';

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const ListTodo = connect(
    mapStateToProps,
    null
)(List)

export default ListTodo
