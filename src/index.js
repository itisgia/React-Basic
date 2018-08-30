import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './form'

class App extends Component {

    constructor (props) {
        {/*help building --*/}
        {/*this is in app compo, bit we need to be in shopping list*/}
        super(props);
        {/*if somethig is chagne you should make state*/}
        this.state = {
            list: [
                {
                    id:1,
                    item : 'Apple juice'
                },
                {
                    id:2,
                    item: 'Toilet Papers'
                },
                {
                    id:3,
                    item : 'Noodles'
                },
                {
                    id:4,
                    item: 'Oranges'
                },
                {
                    id:5,
                    item : 'Free range eggs'
                }
            ],
            text : 'Hello World',
            jumboClass : 'jumbotron text-center',
            darkTheme : false
        }

        this.changeText = this.changeText.bind(this);
        {/*when you want to change something you have to bind it*/}
        this.addNewItemtoList = this.addNewItemtoList.bind(this);

    }



    render() {
        return (
            <div>
                <div className={this.state.jumboClass}>
                    <h1 className="display-4">Shopping List</h1>
                    <h3>{this.state.text}</h3>
                    <ShoppingList list={this.state.list}/>
                    {/*importing shoppling list and form */}
                    <br/>
                    <hr/>
                    <Form addNew= {this.addNewItemtoList}/>
                    <button onClick ={this.changeText}>Change state of h3</button>
                </div>
            </div>
        )
    }

    changeText(e){
        e.preventDefault();
        // alert('H3 will be changed');
        this.setState({
            text: 'button has been clicked',

            darkTheme:!this.state.darkTheme
        });

            if (this.state.darkTheme === true) {
                this.setState({
                    jumboClass : 'jumbotron text-center jumboDark'
                })
            } else {
                this.setState({
                    jumboClass : 'jumbotron text-center'
                })
            }


    }
    addNewItemtoList(item){
        var newItem = {
            id: this.state.list.length +1,
            item: item
        }
        this.setState({list:this.state.list.concat(newItem)})
    }
}


class ShoppingList extends Component {
    render () {
        return (
            <div>
                <ul class="list-group">
                    {
                        this.props.list.map(product => {
                            return <li key={product.id} product={product} className="list-group-item">{product.item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}




ReactDOM.render(<App />, document.getElementById('root'));
