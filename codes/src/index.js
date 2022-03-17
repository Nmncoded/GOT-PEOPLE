import styles from './stylesheets/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Tags from './codes/tags'



function App (){
    return (
        <>
            <Tags />
        </>
    )
}

ReactDOM.render(<App />,document.getElementById(`parent-of-ul`));
