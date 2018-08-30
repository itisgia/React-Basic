import React, { Component } from 'react';

class Form extends Component{
    constructor (props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    render(){
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <input className="form-control" ref="newItem" type="text"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Add New item</button>
                    </div>
                </form>
            </div>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        var newItem = this.refs.newItem.value.trim();
        if(!newItem){
            alert('plz enter your item');
            return;
        }
        this.props.addNew(newItem);
        this.refs.newItem.value = '';
    }
}

{/*You have to wrap a componebt in div*/}
/*
    You only need to export if the component is being
    refrenced on another file
*/
export default Form;
