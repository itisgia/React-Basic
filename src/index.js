import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './form'

class App extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1 className="display-4">Shopping List</h1>
                    <ShoppingList/>
                    <br/>
                    <hr/>
                    
                    <Form/>
                </div>
            </div>
        )
    }
}


class ShoppingList extends Component {
    render () {
        return (
            <div>
                <ul class="list-group">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        )
    }
}




ReactDOM.render(<App />, document.getElementById('root'));
