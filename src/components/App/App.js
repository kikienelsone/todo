import React from 'react'
import './App.css'
import { formatDistance } from 'date-fns'

import Footer from '../Footer/Footer'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'

export default class App extends React.Component {
  constructor() {
    super()
    this.maxId = 100

    this.state = {
      taskList: [
        this.createNewTask('eat'),
        this.createNewTask('sleep'),
        this.createNewTask('love cat'),
        this.createNewTask('repeat'),
      ],
      filter: 'all',
    }
  }

  createNewTask(task) {
    return {
      task,
      done: false,
      active: true,
      id: this.maxId++,
    }
  }

  addItem(text) {
    let newItem = this.createNewTask(text)

    this.setState(({ taskList }) => {
      let newArr = [...taskList, newItem]
      return { taskList: newArr }
    })
  }

  onDone(id) {
    this.setState(({ taskList }) => {
      let idx = taskList.findIndex((item) => item.id === id)
      let oldItem = taskList[idx]
      let newItem = { ...oldItem, done: !oldItem.done }
      let newArr = [...taskList.slice(0, idx), newItem, ...taskList.slice(idx + 1)]
      return { taskList: newArr }
    })
  }

  deleteAllCompletedTasks() {
    this.setState(({ taskList }) => {
      let arr = taskList.filter((item) => !item.done)
      return { taskList: arr }
    })
  }

  date() {
    let date = new Date()
    return formatDistance(date, new Date(), { addSuffix: true })
  }

  deleteTask(id) {
    this.setState(({ taskList }) => {
      let idx = taskList.findIndex((item) => item.id === id)
      let newState = [...taskList.slice(0, idx), ...taskList.slice(idx + 1)]
      return {
        taskList: newState,
      }
    })
  }

  filter(tasks, filter) {
    if (filter === 'all') return tasks
    if (filter === 'active') return tasks.filter((item) => !item.done)
    if (filter === 'done') return tasks.filter((item) => item.done)
  }

  filtration(filter) {
    this.setState({ filter })
  }

  render() {
    const { taskList, filter } = this.state
    let visibility = this.filter(taskList, filter)
    let doneFilter = this.state.taskList.filter((item) => item.done).length
    let doneCounter = this.state.taskList.length - doneFilter

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addItem={this.addItem} />
        </header>
        <TaskList
          taskList={visibility}
          onDelete={this.deleteTask}
          doneItem={this.doneItem}
          onDone={this.onDone}
          date={this.date}
        />
        <Footer
          doneCounter={doneCounter}
          taskList={this.state.taskList}
          filter={this.filter}
          filtration={this.filtration}
          deleteAllCompletedTask={this.deleteAllCompletedTasks}
        />
      </section>
    )
  }
}
