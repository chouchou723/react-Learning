import { createAction } from 'redux-actions'

export const addTodo = createAction('ADD_TODO')
export const setVisibility = createAction('SET_VISIBILITY')
export const toggleTodo = createAction('TOGGLE_TODO')
export const delTodo = createAction('DEL_TODO')
export const changeTodo = createAction('CHANGE_TODO')

//thunk用法
export const initFetch = (val) => dispatch => {
  dispatch({type: 'AAA_TODO',val:val })
}