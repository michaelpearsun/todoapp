//import { v4 as uuidv4 } from 'uuid';
import * as ActionTypes from './ActionTypes';

export const initialState = {
    todos: [
        {
          id: 1,
          title: 'Take out the trash',
          completed: false
        },
        {
          id: 2,
          title: 'Dinner with lovely and beautiful wifeyoogina',
          completed: false
        },
        {
          id: 3,
          title: 'Meeting with imaginary boss',
          completed: false
        }
      ]
};

export const Reducer = (state = initialState, action) => {
  console.log("hello", action)
  switch(action.type) {
    case ActionTypes.ADD_TODO:
      console.log({...state, todos: [...state.todos, action.payload]})
      return {...state, todos: [...state.todos, action.payload]}
  }
    
    return state;
};