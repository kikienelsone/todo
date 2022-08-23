import React from 'react'
import PropTypes from 'prop-types'
import './Task.css'

export default class Task extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //     done: false
    // }
  }
  // doneItem = () => {
  //     this.setState(state => {
  //         return{
  //             done: !state.done
  //         }
  //     })
  // }
  render() {
    const { done, onDone, date, onDelete, id, task } = this.props
    let addedClassNames = ''
    let editClassName = ''
    if (done) {
      addedClassNames = ' completed'
    }

    if (!editClassName) {
      editClassName = 'edit'
    }

    return (
      <div>
        <li className={addedClassNames}>
          <div className="view">
            <input className="toggle" type="checkbox" onClick={onDone} />
            <label>
              <span className="description">{task}</span>
              <span className="created">created {date(task)}</span>
            </label>
            <button className="icon icon-edit" />
            <button className="icon icon-destroy" onClick={() => onDelete(id)} />
          </div>
        </li>
        <div className={editClassName}>
          <li className="editing">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">{task}</span>
                <span className="created">created {date(task)}</span>
              </label>
              <button onClick={() => editClassName === 'edit'} className="icon icon-edit" />
              <button className="icon icon-destroy" />
            </div>
            <input type="text" className="edit" value="Editing task" />
          </li>
        </div>
      </div>
    )
  }
}
Task.defaultProps = {
  date: Date.now(),
  onDelete: () => {},
  onDone: false,
  done: false,
}
Task.propTypes = {
  done: PropTypes.bool,
  onDone: PropTypes.func,
  date: PropTypes.func,
  onDelete: PropTypes.func,
  task: PropTypes.string,
  id: PropTypes.number,
}
