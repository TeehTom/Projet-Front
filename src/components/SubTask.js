import React from 'react';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import EditorAttachFile from 'material-ui/svg-icons/editor/attach-file';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TaskProgress from './TaskProgress.js'


class SubTask extends React.Component {


    render() {

        return (
            <MuiThemeProvider>
           <div className="subtask-box">
               <div>
               {this.props.title}
               </div>
               <div>
                   <button onClick={ () => this.props.remove(this.props.id) } />
               </div>
           </div>
            </MuiThemeProvider>


        )
    }
}



export default SubTask;