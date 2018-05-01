import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

class TaskForm extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
           value : ''

        };





    }

    onValueChange = (event ) => {
        this.setState({
            value:event.target.value
        })
    }

    render() {



        return (
            <MuiThemeProvider >


                <TextField

                    floatingLabelText={this.props.title}
                    onChange={(event) => this.onValueChange(event)}
                />

                <FlatButton label="Ajouter" primary={true} onClick={(event) => this.props.onSubmit(event, this.state.value)} />

            </MuiThemeProvider>
        );
    }
}

export default TaskForm;