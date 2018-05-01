import React from 'react';
import Avatar from 'material-ui/Avatar';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {

    deepOrange300,

    purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};

/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
const UserAvatar = (props) => (
    <div className='avatar-container'>
    <List>

        <ListItem
            disabled={true}
            leftAvatar={
                <Avatar
                    color={deepOrange300}
                    backgroundColor={purple500}
                    size={30}
                    style={style}
                >
                    T
                </Avatar>
            }
        >
            {props.user.username}
        </ListItem>
    </List>
    </div>
);


export default UserAvatar;
