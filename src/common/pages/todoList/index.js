import React from 'react'
import { connect } from 'react-redux'
import { addTodo,toggleTodo,delTodo,initFetch,changeTodo } from 'actions/todoList'
import FilterLink from './filterLink'
import './index.less'

const Greeting = () => <div>Hi there!</div>;
let nextTodoId = 0
@connect(
    (state) => ({
        aaa:'aaa',
        todoList: state.todoList,
        setVisibility: state.setVisibility,
    })
)

class todoList extends React.Component {
    // constructor(props){
    //     super(props);
    //     // this.state = {
    //     //     b:'cc'
    //     // }
    // }
   state = {
    a:'bb'
   }

    submit = (e) => {
        e.preventDefault()
        console.log(this)
        if(!this.input.value.trim()){
            return
        }
        this.props.dispatch(addTodo({
            id: nextTodoId++,
            text: this.input.value,
            type: 'ADD_TODO',
        }))
        this.input.value = ''
    }

     componentDidMount() {
        console.log(this.state.a)
        // this.props.dispatch({type:'AAA_TODO'})
        this.props.dispatch(initFetch({a:123}))//必须使用中间件thunk才能如此调用;
    }
    addL = (rr)=>{//ref的用法,rr代表当前的dom组件
        console.log(this)
       return this.input = rr
    }
    render() {
        const todoList = this.props.todoList
        const setVisibility = this.props.setVisibility
        let todos = todoList
        if (setVisibility.filter === 'SHOW_COMPLETED') {
            todos = todoList.filter(t => t.completed)
        } else if (setVisibility.filter === 'SHOW_ACTIVE') {
            todos = todoList.filter(t => !t.completed)
        }
        return (
            <div className="todo-box"  onClick={e=>this.props.dispatch(changeTodo({todoList}))}>
            <Greeting/>
                <div className="todo-innerBox">
                    <div className="todo-tab" onClick={e=> this.props.dispatch(initFetch(this.props.setVisibility))}>
                        <FilterLink filter="SHOW_ALL" name="全部任务"></FilterLink>
                        <FilterLink filter="SHOW_ACTIVE" name="待办任务" ></FilterLink>
                        <FilterLink filter="SHOW_COMPLETED" name="已完成任务"></FilterLink>
                    </div>
                    <ul className="list-group">
                        {
                            todos.map((todo,index) =>
                            <li className="todo-list_li" key={index} style={{ textDecoration:todo.completed ? "line-through" : "none" }}>
                                <input type="checkbox" className="check-box" checked={todo.completed} onClick={ e => this.props.dispatch(toggleTodo({
                                    id: todo.id,
                                    type: "TOGGLE_TODO"
                                }))} />
                                {todo.text}
                                <button className="todo-list_del" onClick={e => this.props.dispatch(delTodo({
                                    id: todo.id,
                                    type: "DEL_TODO"
                                })) }>删除</button>
                            </li>)
                        }
                    </ul>
                    <form onSubmit={this.submit} className="todo-add">
                        <input placeholder="你想做点什么" ref={this.addL} className="todo-input" />
                        <button type="submit" className="todo-btn">添加任务</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default todoList