import "./NewTaskForm.css"
import React from "react";


export default class NewTaskForm extends React.Component{
    constructor(props) {
        super(props)
    }

    state = {
        input : ""
    }

    addNewTask = (event) =>{
        this.setState({
            input : event.target.value
        })
    }

    onSubmit = (event) =>{
        event.preventDefault()
        this.props.addItem(this.state.input)
        this.setState({
            input : ""
        })
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input className="new-todo" placeholder="What needs to be done?"
                       autoFocus onChange={this.addNewTask} value={this.state.input}/>

            </form>

        )
    }

}