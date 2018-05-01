import React from "react";

class Wrapper extends React.Component {

    constructor(props) {
        super(props);


        this.state = {

                     isLogged: false,
                     user : {}


        };


    }


    render() {
        {this.state.isLogged? <App /> : <Login />}
    }
}