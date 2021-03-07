import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render()
    {
        return(
            <h1>This is React</h1>
        );
    }
}



export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);