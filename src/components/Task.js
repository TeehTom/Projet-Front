import React from 'react';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import EditorAttachFile from 'material-ui/svg-icons/editor/attach-file';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TaskProgress from './TaskProgress.js'


class Task extends React.Component {


    render() {
        return (
            <MuiThemeProvider>
                <div className="task">
                    <div className='taskTitle' onDoubleClick={(event) => this.props.onTaskClick(event, this.props.id)}>
                        {this.props.title}
                        <TaskProgress/>

                    </div>
                    <div className='taskButtons'>

                        <IconButton
                            onClick={() => this.props.remove(this.props.id)}
                        >
                            <ActionDeleteForever/>
                        </IconButton>


                        <IconButton>
                            <ContentAdd onClick={(event) => this.props.onTaskClick(event, this.props.id)}/>
                        </IconButton>

                        <input  className='task-button-checkbox'type="checkbox" id="listcompleted" name="listcheck" value="listdone"/>


                    </div>
                </div>
            </MuiThemeProvider>


        )
    }
}


/*const Task = (props) => {
    const menu = document.getElementById('taskMenu');
    const newDisplay =  menu.style.display === 'none' ? 'block' : 'none';
    const newStyle = { display : newDisplay}

    return (
        <div className="task">
        <p key = {props.id} >
            {props.title}
            <button className="removeButton" onClick={() => props.remove(props.id)}>remove</button>
            <button  onClick={ () => {
                menu.style.display

            }}
            > More </button>
        </p>
            <div>
                <TaskMenu />
            </div>

        </div>
    )
}
*/
export default Task;