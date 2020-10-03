//import { v4 as uuidv4 } from 'uuid';

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
    return state;
};