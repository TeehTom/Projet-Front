import React from 'react';

class ListForm extends React.Component {
    render() {
        return (

            <form onSubmit={(event) => this.props.onSubmit(event, this.input.value)} id="form">

                <input ref={(node) => this.input = node} id="list" name="title" type="text" />
                <button type="submit">
                    Ajouter
                </button>
            </form>
        );
    }
}

export default ListForm;