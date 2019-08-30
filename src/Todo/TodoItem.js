import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

let styles= {
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid gray',
        borderRadius: '4px',
        marginBottom: '5px'
    },
    input: {
        marginRight: '1rem'
    }
}



function TodoItem( {todo, index, onChange} ){
    const classes = [];
    const {removeTodo}=useContext(Context);
    if(todo.completed){
        classes.push('done');
    }
    return <li style={styles.li}>
        <span
         className={classes.join(' ')}>
        <input type="checkbox"
               checked={todo.completed}
               onChange={()=>{
                   onChange(todo.id)}
               } />
        <strong>{++index}) </strong>
            {todo.title} {todo.completed}
        </span>
        <button className='rm' onClick={()=>removeTodo(todo.id)}>&times;</button>
    </li>;
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;