mport React from 'react';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};

class CheckBox extends React.Component {
    state = {
        checked: this.props.completed,
    }

    updateCheck() {
        this.setState((oldState) => {
            fetch('api/todoapp/v1/')

            return {
                checked: !oldState.checked,
            };
        });
    }

    render() {
        return (
            <MuiThemeProvider >
            <div style={styles.block}>

                <Checkbox
                    label="Simple with controlled value"
                    checked={this.state.checked}
                    onCheck={this.updateCheck.bind(this)}
                    style={styles.checkbox}
                />

            </div>
            </MuiThemeProvider>
        );
    }
}

export default CheckBox;