import * as ActionTypes from './ActionTypes';

export const addTodo = (id, title, completed) => ({
    type: ActionTypes.ADD_TODO,
    payload: {
        id: id,
        title: title,
        completed: completed
    }
});