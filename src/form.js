import React, {Component} from 'react'

class Form extends Component {
    render(){
        return (
            <div>
                <form>
                    <div className="form-group">
                        <input className="form-control" ref="text" type="text"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Add New item</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default form;
