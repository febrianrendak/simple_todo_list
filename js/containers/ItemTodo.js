import { connect } from 'react-redux';
import Item from '../components/Item.jsx';
import { toggleItem, deleteItem } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => {
            dispatch(deleteItem(id))
        },
        toggleMark: id => {
            dispatch(toggleItem(id))
        }
    }
}

const ItemTodo = connect(
    null,
    mapDispatchToProps
)(Item)

export default ItemTodo
