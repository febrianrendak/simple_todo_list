export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        item,
    }
}

export const toggleItem = (id) => {
    return {
        type: TOGGLE_ITEM,
        id
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        id
    }
}
