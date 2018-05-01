import React from 'react';
import Task from "./Task.js"
import TaskForm from './TaskForm.js'
import { CSSTransitionGroup } from 'react-transition-group';



class TaskList extends React.Component {


    render() {
        let Liste ='';
            if(this.props.list.tasks) {
                Liste = this.props.list.tasks.map(task => {
                    if(task) {
                        return (

                            <Task key={task.id} id={task.id} title={task.title} remove={this.props.remove}
                                  onTaskClick={(event) => this.props.onTaskClick(event, task.id)}/>

                        )
                    }

                })
            }




        return(

            <div key={this.props.list.id}>
                <h2> {this.props.list.title} </h2>
                <TaskForm onSubmit={(event, task) => this.props.submit(event, task) } title='Ajouter une tâche' />
                <CSSTransitionGroup
                                         transitionName = "example"
                                         transitionAppear={false}
                                         transitionEnter = {true}
                                         transitionEnterTimeout = {500}
                                         transitionLeave = {true}
                                         transitionLeaveTimeout = {500}>
                    {Liste}
                </CSSTransitionGroup>
            </div>

        )
    }
}

export default TaskList;