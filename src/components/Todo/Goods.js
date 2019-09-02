import React from 'react'
import TodoGoods from '../Todo/TodoGoods'


export default function ShowGoods(props) {
    return (
        <div>
            {props.goods.map(element=>{
            return <TodoGoods goods={element}/>

        })
    }</div>)
}
