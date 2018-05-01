import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class Login extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            isLogged: false,
            password : '',
            login : '',
        };

        this.onLoging=this.onLoging.bind(this);
    }

    onLoging(login,password) {

        const myInit = {

            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login , password})

        }
        fetch('/api/todoapp/v1/users/login',myInit)
            .then( (res) => res.json())
            //.then( (res) => console.log(res))
            .then( (res) => {
                if (res.id) {
                    this.props.onLog(login,res.id)
                }
            })


    }


    onLoginValueChange = (event ) => {


        this.setState({
           login : event.target.value
        })
    }

    onPasswordValueChange = (event ) => {
        this.setState({
            password :event.target.value
        })
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className='login-box'>
                    <TextField
                        //hintText="Login"
                        //errorText="invalid login or password"
                        floatingLabelText="Login"
                        onChange = { (event) => this.onLoginValueChange(event)}
                    />

                    <TextField
                        //hintText="Password"
                        onChange = { (event) => this.onPasswordValueChange(event)}
                        floatingLabelText="Password"
                    />
                    <FlatButton label="Ajouter" primary={true}
                                onClick={() => this.onLoging( this.state.login,this.state.password)}

                    />
                </div>


            </MuiThemeProvider>
        )
    }

}

export default Login;