import React from 'react'
import './Footer.css'
import PropTypes from 'prop-types'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.statusButtons = [
      { name: 'all', status: 'all' },
      { name: 'active', status: 'active' },
      { name: 'done', status: 'done' },
    ]
  }

  render() {
    const filterBtns = this.statusButtons.map(({ name, status }) => {
      return (
        <li key={name}>
          <button onClick={() => this.props.filtration(name)}>{status}</button>
        </li>
      )
    })

    return (
      <footer className="footer">
        <span className="todo-count">{this.props.doneCounter} items left</span>
        <ul className="filters">{filterBtns}</ul>
        <button onClick={() => this.props.deleteAllCompletedTask(this.props.task)} className="clear-completed">
          Clear completed
        </button>
      </footer>
    )
  }
}
Footer.defaultProps = {
  filtration: () => {},
  doneCounter: 0,
  deleteAllCompletedTask: () => {},
}

Footer.propTypes = {
  filtration: PropTypes.func,
  doneCounter: PropTypes.number,
  deleteAllCompletedTask: PropTypes.func,
  task: PropTypes.object,
}
