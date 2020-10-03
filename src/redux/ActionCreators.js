import * as ActionTypes from './ActionTypes';

export const addTodo = (todo) => ({
    type: ActionTypes.ADD_TODO,
    payload: todo
    
});