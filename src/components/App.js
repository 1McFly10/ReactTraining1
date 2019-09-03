import React, { useEffect } from "react";

import TodoList from '../components/Todo/TodoList'
import Context from '../context'
import Loader from '../components/Loader/Loader'
import Modal from '../components/Modal/Modal'
import '../components/Modal/Modal.css'
import Test from '../components/Todo/Test'

const AddTodo = React.lazy(()=> new Promise(resolve =>{
    setTimeout(()=>{
        resolve(import('../components/Todo/AddTodo'))
    },3000)
})
)

function App() {

    const[loading, setLoading] = React.useState(true);
    let [todos, setTodos] = React.useState( [
        {id: 1, completed: false, title: 'Купить хлеб'},
        {id: 2, completed: false, title: 'Купить квас'},
        {id: 3, completed: false, title: 'Купить молоко'}

    ])
   

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos=>{
                setTodos(todos)
                setLoading(false)
            })
    },[])

function toggleTodo(id){
    setTodos( todos.map(todo=>{
        if(todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo;
    })
    )
}

function removeTodo(id) {
    setTodos(todos.filter(todo=>todo.id !== id))
}
function addTodo(title) {
    setTodos(todos.concat([{
        title,
        id: Date.now(),
        completed: false
    }]))
}

    return(
        <Context.Provider value={{removeTodo}}>
        <div className="wrapper">
            <h1>Список покупок</h1>
            <Modal />
            <React.Suspense fallback={<Loader/>}>
                <AddTodo onCreate={addTodo}/>
            </React.Suspense>


            {loading &&<Loader/>}
            {todos.length ? (
                <TodoList todos={todos} onToggle = {toggleTodo}/>
                ): loading ? null :(
                <p>Список пуст</p>
            )}



        <Test />

        </div>
        </Context.Provider>
    )

}
export default App