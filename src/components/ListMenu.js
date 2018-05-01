import React from "react";
import ListForm from './ListForm.js'
import {Button} from 'react-bootstrap';
import UserAvatar from './UserAvatar.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from './List.js'

/*const ListMenu = (props) => {
    const lists = props.list.map(list => {
        <div>
        <Button bsStyle="primary" bsSize="large" block onClick={ (event,id) => props.click(event,id)}>
            {list.id}
        </Button>
            <h1> TEST </h1>
        </div>
    });
    console.log(lists);
    return(
        <div id='listMenu'>
            <h1> Listes </h1>
            <ListForm  onSubmit =  {(event, task) => props.submit(event, task)} />
            {lists}
        </div>
    )
}*/




class ListMenu extends React.Component {

    render() {
        const lists = this.props.list.map(list => {
            return(


                /*<Button bsStyle="primary"
                        bsSize="large"
                        block
                        onClick={ (event,id) => this.props.click(event,list.id)}
                        key={list.id}
                >
                    {list.id} {list.title}
                </Button>*/
                <List key={list.id}  onClick={ (event) => this.props.click(event,list.id)} remove={ () => this.props.remove(list.id)} title={list.title} id={list.id}
                      checked={list.completed}
                />


            )
        });
        console.log(lists)
        return (
            <MuiThemeProvider >
            <div id='listMenu'>
                <h1> Listes </h1>

                    <UserAvatar user={this.props.user}>

                    </UserAvatar>

                <ListForm  onSubmit =  {(event, task) => this.props.submit(event, task)} />
                {lists}
            </div>
            </MuiThemeProvider>

        );
    }
}



export default ListMenu;