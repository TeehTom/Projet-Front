import React from 'react';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';



class List extends React.Component {


    render() {
        return(
            <MuiThemeProvider >
               <div className='list-container' key={this.props.id} onClick={ (event) => this.props.onClick(event,this.props.id) }>
                   <div className='list'>
                       {this.props.title}
                   </div>
                   <div className='list-buttons'>
                       <IconButton
                           onClick={() => this.props.remove(this.props.id)}
                       >
                           <ActionDeleteForever />
                       </IconButton>
                       <input ref={(node) => this.input = node} type="checkbox" id="listcompleted" name="listcheck" value="listdone"  checked={this.props.checked}/>

                   </div>
               </div>
            </MuiThemeProvider>






        )
    }
}



export default List;