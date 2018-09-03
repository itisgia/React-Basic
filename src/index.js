
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// importing the component from ./from.js
import Form from './form';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    item: 'Apples'
                },
                {
                    id: 2,
                    item: 'Pears'
                },
                {
                    id: 3,
                    item: 'Bananas'
                }

            ], // all property rathern then state
            text: 'Hello World',
            jumboClass: 'jumbotron text-center',
            darkTheme: false,
            // those 3 down below will change depends on value
            editID: 0,
            buttonText:'Add New Item',
            editingValue: ''
        }
        this.changeText = this.changeText.bind(this);
        this.addNewItemtoList = this.addNewItemtoList.bind(this);
        this.handleEdit =this.handleEdit.bind(this);
        this.handleChangeText= this.handleChangeText.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    render(){
        return (
            <div className="App">
              <div className={this.state.jumboClass}>
                <h1 className="display-4">Shopping List</h1>
                <h3>{this.state.text}</h3>
                {/* Calling the ShoppingList component at the bottom of the page */}
                <ShoppingList
                    list={this.state.list}
                    editItem ={this.handleEdit}
                    deleteItem = {this.handledelete}
                />

                <hr/>

                {/* Calling the Form component which is in ./form.js */}
                <Form
                    {...this.state}
                    // pass every sigle states into our form they all turned them into property
                    addNew={this.addNewItemtoList}
                    updateItem={this.handleUpdate}
                    changeText={this.handleChangeText}
                />
                <button onClick={this.changeText} >Change theme of form</button>
              </div>
            </div>
        )
    }

    changeText(e){
        e.preventDefault();
        // alert('H3 will be changed');
        this.setState({
            text: 'Button has been clicked',
            darkTheme: !this.state.darkTheme
        });

        if(this.state.darkTheme === false){
            this.setState({
                jumboClass: 'jumbotron text-center jumboDark'
            });
        } else {
            this.setState({
                jumboClass: 'jumbotron text-center'
            });
        }
    }

    addNewItemtoList(item){
        var newItem = {
            id: this.state.list.length + 1,
            item: item
        }
        this.setState({list: this.state.list.concat(newItem)});
    }

    handleEdit(itemToEdit) {
        this.setState({
            editID: itemToEdit.id,
            buttonText: 'Edit Item',
            editingValue: itemToEdit.item
        })
    }
    handleDelete(itemToDelete) {
		var allItems = this.state.list;
		for (var i = 0; i < allItems.length; i++) {
			if (allItems[i].id === itemToDelete.id) {
				allItems.splice(i, 1);
				break;
			}
		}
		for (var j = 0; j < allItems.length; j++) {
			allItems[j].id = j + 1;
		}
		this.setState({ list: allItems });
	}

    handleUpdate(updatedItem){
        var allItems = this.state.list;
        for (var i = 0; i < allItems.length; i++) {
            if(allItems[i].id == updatedItem.id){
                allItems[i].item = updatedItem.item;
                break;
            }
        }
        this.setState({
            list: allItems,
            editID: 0,
            buttonText: 'Add New Item',
            editingValue: ''
        })
    }


    handleChangeText(inputValue){
        this.setState({
            editingValue: inputValue
        });
    }
}

class ShoppingList extends Component{
    render(){
        return(
            <div>
                <ul className="list-group">
                    {
                        this.props.list.map(product => {
                            return <li key={product.id} product={product} className="list-group-item">{product.item}   <span className="controls"><span className="edit" onClick={this.edit.bind(this, product)}>Edit</span> - <span className="delete" onClick={this.delete.bind(this, product)}>Delete</span></span></li>
                        })
                    }
                </ul>
            </div>
        )
    }

    edit(product){
        console.log("editing");
        this.props.editItem(product);
    }

    delete(product){
        console.log("deleteing");
        this.props.deleteItem(product);
    }
}










ReactDOM.render(<App />, document.getElementById('root'));
