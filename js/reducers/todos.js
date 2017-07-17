import { ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM } from '../actions';

const todos = (state=[], action) => {
    switch(action.type) {
        case ADD_ITEM:
            return([
                ...state.map(item => Object.assign({}, item)),
                action.item
            ])
        case TOGGLE_ITEM:
            return state.map(todo =>
                (todo.id === action.id) ? Object.assign({}, todo, { done: !todo.done }) : todo
            )
        case DELETE_ITEM:
            return state.map(item => Object.assign({}, item)).filter(item => item.id !== action.id)
        default:
            return state
    }
}

export default todos
