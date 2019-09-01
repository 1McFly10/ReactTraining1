import React from 'react'
import {render} from 'react-dom'
import './index.css'
import App from './components/App'
// import Article from './components/Article';
// import Article from './components/Article'


function tick() {
    const element = (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginRight: '1rem'}}>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    render(element, document.getElementById('root_time'));
}

// setInterval(tick, 1000);

// setInterval(()=>render( <h2>It is {new Date().toLocaleTimeString()}.</h2>, document.getElementById('root')));
render(<App/>, document.getElementById('root'));
// render(<Article />, document.getElementById('root'));