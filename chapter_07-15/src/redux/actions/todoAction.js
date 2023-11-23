import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const { addTodo, removeTodo, removeAll } = createActions({
    ADD_TODO: (text) => {
        return { text };
    },
    REMOVE_TODO: () => {
        return {};
    },
    REMOVE_ALL: () => {
        return {};
    }
});

const reducer = handleActions(
    {
        [addTodo]: (state, action) => {
            return state.concat(action.payload.text);
        },
        [removeTodo]: (state, action) => {
            return state.slice(0, -1);
        },
        [removeAll]: (state, action) => {
            return [];
        }
    },
    initialState
);

export default reducer;
