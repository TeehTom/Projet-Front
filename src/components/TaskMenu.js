import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SubTask from './SubTask.js'
import TaskForm from "./TaskForm";



export default class TaskMenu extends React.Component {

    render() {
        let subtasks;
        if(this.props.subtasks) {
            subtasks = this.props.subtasks.map( e => <SubTask id = {e.id} title={e.title} remove={() => this.props.remove(e.id) }/> )
        }
        return (
            <MuiThemeProvider >
                <div>
                    <Drawer open={this.props.open}
                            openSecondary={true}
                            width={300}>
                        <h2>{this.props.taskOnMenu.title} </h2>

                        <TaskForm onSubmit={this.props.onSubmit} title = 'subtasks' />
                        {subtasks}
                     </Drawer>
                 </div>
            </MuiThemeProvider>
        );
    }
}