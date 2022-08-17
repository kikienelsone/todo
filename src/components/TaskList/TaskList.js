import React from "react";
import "./TaskList.css"
import Task from "../Task/Task";
import PropTypes from "prop-types";

export default class TaskList extends React.Component{

    // static defaultProps = {
    //     taskList: [],
    //     addedClassNames : "",
    //     onDelete: () =>{},
    //     onDone: false,
    //     date: Date.now()
    // }

    render() {
        const {taskList, addedClassNames, onDelete, onDone, date} = this.props
        let taskNames = taskList.map(item =>{
         return(
             <section className="main" key={item.id}>
                 <ul className="todo-list">
                     <li className={addedClassNames}>
                         <Task {...item} onDone={() => onDone(item.id)} onDelete={onDelete} addedClassNames={addedClassNames}
                               date={date}/>
                     </li>
                 </ul>
             </section>
        )
    })
        return(
            <div>{taskNames}</div>
        )
    }

}
TaskList.defaultProps = {
    taskList: [],
    addedClassNames : "",
    onDelete: () =>{},
    onDone: false,
    date: Date.now()
}
TaskList.propTypes = {
    taskList: PropTypes.array,
    addedClassNames: PropTypes.string,
    onDelete: PropTypes.func,
    onDone: PropTypes.func,
    date: PropTypes.func
}