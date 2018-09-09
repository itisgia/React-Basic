
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './form';
import Footer from './foote';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    item: 'Write your tasks and turn them into cute sticky notes'
                }

            ], // all property rathern then state
            // those 3 down below will change depends on value
            editID: 0,
            buttonText:'Post-it',
            editingValue: ''
        }
        this.addNewItemtoList = this.addNewItemtoList.bind(this);
        this.handleEdit =this.handleEdit.bind(this);
        this.handleChangeText= this.handleChangeText.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    render(){
        return (
            <div className="App">

                <h1 className="display-4">To Do List <i class="fa fa-pencil-alt"></i></h1>
                <Form
                    {...this.state}
                    // pass every sigle states into our form they all turned them into property
                    addNew={this.addNewItemtoList}
                    updateItem={this.handleUpdate}
                    changeText={this.handleChangeText}
                />
                <div className="list-wrapper">
                    <ToDoList
                        list={this.state.list}
                        editItem ={this.handleEdit}
                        deleteItem = {this.handleDelete}
                    />
                </div>
                <Footer/>
            </div>

        )
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
            if(allItems[i].id === updatedItem.id){
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

class ToDoList extends Component{
    render(){
        return(
            <div className="flex-wrap">
                    {
                        this.props.list.map(product => {
                            return <div key={product.id} product={product} className="notes"><p className="itemP">{product.item}</p><div className="controls"><span className="edit" onClick={this.edit.bind(this, product)}>Edit</span>  <span className="delete" onClick={this.delete.bind(this, product)}>Done ✓</span></div></div>
                        })
                    }
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





export default App;
