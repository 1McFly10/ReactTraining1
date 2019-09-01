import React, { useEffect } from "react";

import TodoList from '../Todo/TodoList'
import TodoItem from '../Todo/TodoItem'
import ShowGoods from '../Todo/Goods'
import TodoGoods from '../Todo/TodoGoods'
import Context from '../context'
import Loader from '../Loader'
import Modal from '../Modal/Modal'
import '../Modal/Modal.css'
import Test from '../Todo/Test'

const AddTodo = React.lazy(()=> new Promise(resolve =>{
    setTimeout(()=>{
        resolve(import('../Todo/AddTodo'))
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
    let goods = [
        {id: 5, name: 'Iphone XR', price: 1300 },
        {id: 3, name: 'Iphone X', price: 1100},
        {id: 1, name: 'Iphone XS', price: 2100}
    ];

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