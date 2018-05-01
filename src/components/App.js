import React from 'react';

import '../App.css';
import '../index.css';
import TaskList from './TaskList.js';

import TaskMenu from "./TaskMenu.js";
import ListMenu from './ListMenu.js';
import Login from './Login.js';


class App extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            data: [],
            taskMenuIsOpen: false,
            currentTaskInMenu: {},
            idCounter: 1000,
            currentListInMenu: {},
            isLogged: false,
            user : {}


        };

        this.onTaskClick = this.onTaskClick.bind(this);
    }

    componentDidMount() {


        /*fetch('/api/todoapp/v1/users/1/data')
            .then(res => res.json())
            .then((data) => this.setState({data: data.testdata}))*/

    }


    onFormSubmit(event, task) {


        /* this.setState((prevState) => {


             prevState.currentListInMenu.tasks ? prevState.currentListInMenu.tasks : prevState.currentListInMenu.tasks = [];
             prevState.currentListInMenu.tasks.push({
                 id: prevState.idCounter++,
                 title: task
             })

             return {
                 data: this.state.data
             }
         })*/
        const myInit = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: task,
                id: this.state.currentListInMenu.id
            })

        }

        fetch(`/api/todoapp/v1/lists/addtask/`, myInit)
            .then(res => res.json())
            .then(res => {
                this.setState((prevState) => {
                    prevState.currentListInMenu.tasks ? prevState.currentListInMenu.tasks : prevState.currentListInMenu.tasks = [];
                    prevState.currentListInMenu.tasks.push({
                        id: res.id,
                        title: task
                    })

                    return {
                        data: this.state.data
                    }

                })

                /* fetch(`/api/todoapp/v1/lists/addtask/`, myInit)
                     .then(res => res.json())
                     //.then(res => console.log('query result :' ,res))
                     .then( result =>  {
                         this.setState((prevState) => {


                             const idList = prevState.data.indexOf(prevState.currentListInMenu)
                             const size = prevState.data[idList].tasks.length
                           // const newData = Object.assign(prevState.data[idList].tasks[size-1],{ id : result.id})
                             console.log('idList :' ,idList)
                            //const id =  prevState.currentListInMenu.tasks.map( e =>  e.id).indexOf(result.id)
                             //const test = Object.assign({ id : result.id},  prevState.data[prevState.currentList])
                             //console.log(test)

                             //prevState.data[prevState.data.length-1]=test;
                             prevState.data[idList].tasks[size-1].id=result.id
                             return {
                                 data: this.state.data
                             }
                         })})*/


            })
    }

    handleStatus (id,url,status) {
        console.log('handleStatus')
        console.log(status)
        const myInit = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                id: id,

            })

        }

        //fetch(url,myInit)

    }


    onLog (username,id) {

        fetch('/api/todoapp/v1/users/1/data')
            .then(res => res.json())
            .then((data) => this.setState({data: data.testdata}))

        this.setState ( (prevState) => {
        fetch(`api/todoapp/v1/users/${id}`)
            return (
                {
                    isLogged : !prevState.isLogged,
                    user : { id : id,
                             username : username   }
                }
            )


        })


    }


    handleRemove(id) {
        this.setState(prevState => {
            const newTaskList = prevState.currentListInMenu.tasks.filter(
                todo => todo && todo.id !== id
            )


            const newList = {
                id: prevState.currentListInMenu.id,
                title: prevState.currentListInMenu.title,
                tasks: newTaskList
            }

            const listIndex = this.state.data.indexOf(this.state.currentListInMenu)

            this.state.data.splice(listIndex, 1, newList)


            const myInit = {method: 'DELETE'}
            fetch(`/api/todoapp/v1/tasks/delete/${id}`, myInit)
                .then(() => console.log('task deleted'))


            return {
                data: this.state.data,
                currentListInMenu: this.state.data[listIndex]
            }
        })


    }

    handleListRemove(id) {
        this.setState(prevState => {
            const newData = prevState.data.filter(
                todo => todo && todo.id !== id
            )
                /* let newCurrentListInMenu;
            console.log('prevState id', prevState.currentListInMenu.id)
            if(id===prevState.currentListInMenu.id) {
                 newCurrentListInMenu = null
            }
            else {
                newCurrentListInMenu = { ...prevState.currentListInMenu };
            }*/



            const myInit = {method: 'DELETE'}
            fetch(`/api/todoapp/v1/lists/delete/${id}`, myInit)
                .then(() => console.log('list deleted'))


            return {
                data: newData,
                //currentListInMenu: newCurrentListInMenu
            }
        })


    }


    onTaskClick(event, id) {
        const newState = true;
        /*const idLookingFor = this.state.currentListInMenu.tasks.map(task => {
            if(task && task.id == id)
                return task
        }).indexOf(id);
        console.log('id : ' , idLookingFor)
        const currentTask = this.state.currentListInMenu.tasks[idLookingFor];
        console.log(currentTask)*/
        console.log(id)
        const idLooking = this.state.currentListInMenu.tasks.map ( task => task.id).indexOf(id)
        console.log(idLooking)

        this.setState({
            taskMenuIsOpen: newState,
            currentTaskInMenu : this.state.currentListInMenu.tasks[idLooking]

        });
    };

    taskMenuClosing() {
        this.setState({
            taskMenuIsOpen: false
        })
    }

    onListClick(event, id) {
        const idLookingFor = this.state.data.map(list => list.id).indexOf(id);

        this.setState({

            currentListInMenu: this.state.data[idLookingFor]

        });
    }

    onListSubmit(event, list) {
        event.preventDefault();


        this.setState((prevState) => {

            prevState.data.push({
                title: list,
                task: []
            })

            return {
                data: this.state.data
            }
        })


        const myInit = {

            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: list})

        }




        fetch(`api/todoapp/v1/lists/addlist`, myInit)
            .then(res => res.json())
            //.then(res => console.log('query result :' ,res))
            .then( result =>  { console.log(result)
                this.setState((prevState) => {

                 const test = Object.assign({ id : result.id},  prevState.data[prevState.data.length-1])
                    console.log(test)

                    prevState.data[prevState.data.length-1]=test;

                return {
                    data: this.state.data
                }
            })})




    }

    onSubTaskSubmit(event, subtask) {
        event.preventDefault();


        /* this.setState((prevState) => {

             prevState.data.push({
                 title: list,
                 task: []
             })

             return {
                 data: this.state.data
             }
         })*/


        const myInit = {

            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: subtask})

        }
        const id = this.state.currentTaskInMenu.id

        fetch(`api/todoapp/v1/tasks/${id}/addsubtask`, myInit)
            .then(res => res.json())
            //.then(res => console.log('query result :' ,res))
            .then( result =>  { console.log(result)
                this.setState((prevState) => {

                    prevState.currentTaskInMenu.subtasks.push({
                        id : result.id,
                        title: subtask,

                    })

                    return {
                        data: this.state.data
                    }
                })})




    }

    handleSubTaskRemove(id) {
        console.log(id)
        this.setState(prevState => {
            const newSubTaskList = prevState.currentTaskInMenu.subtasks.filter(
                todo => todo && todo.id !== id
            )
            console.log('subtask id',id)

            const newTask = {
                id: prevState.currentTaskInMenu.id,
                title: prevState.currentTaskInMenu.title,
                subtasks: newSubTaskList
            }

            const listIndex = this.state.data.indexOf(this.state.currentTaskInMenu)

            const idlist = prevState.data.indexOf(prevState.currentListInMenu)
            const idtask = prevState.data[idlist].tasks.indexOf(prevState.currentTaskInMenu)


            this.state.data[idlist].tasks.splice(idtask, 1, newTask)



            const myInit = {method: 'DELETE'}
            fetch(`/api/todoapp/v1/subtasks/delete/${id}`, myInit)
                .then(() => console.log('task deleted'))


            return {
                data: this.state.data,
                currentTaskInMenu: this.state.data[idlist].tasks[idtask]
            }
        })
    }




    render() {

        return (
            <div>
                {this.state.isLogged ? (
                        <div className='wrapper'>
                            <ListMenu submit={this.onListSubmit.bind(this)} list={this.state.data}
                                      click={this.onListClick.bind(this)} remove={this.handleListRemove.bind(this)} user={this.state.user}
                                      isCompleted={this.handleStatus.bind(this)}
                            />

                            <div className='taskContainer'
                                 onClick={this.state.taskMenuIsOpen ? this.taskMenuClosing.bind(this) : null}>
                                {this.state.currentListInMenu.id ?
                                    <TaskList remove={this.handleRemove.bind(this)} list={this.state.currentListInMenu}
                                              submit={this.onFormSubmit.bind(this)} onTaskClick={this.onTaskClick}
                                              key={this.state.currentListInMenu.id}
                                                list={this.state.currentListInMenu}/>
                                    :
                                    "Cliquez sur une liste"}


                            </div>


                            <TaskMenu taskOnMenu={this.state.currentTaskInMenu} open={this.state.taskMenuIsOpen}
                                      key='taskMenu'  subtasks={this.state.currentTaskInMenu.subtasks}
                                      onSubmit={this.onSubTaskSubmit.bind(this)}
                                      remove = {this.handleSubTaskRemove.bind(this)}
                                        />


                        </div>)
                    : (

                        <Login onLog={this.onLog.bind(this)}/>

                    )
                }
            </div>
        );
    }
}


export default App;