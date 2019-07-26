import React from 'react';
import classes from './ContactList.module.css';

const ContactList = props => {
    const contacts = props.contacts;

    return (
        <div className={classes.ContactList}>
            {contacts.map(contact => {
                return (
                    <div key={contacts.indexOf(contact)}>
                        <div className={classes.ContactListTitle}>
                            {contact.group}
                        </div>
                        <div>
                            {contact.children.map(user => {
                                return (
                                    <div className={classes.ContactListUsers} key={user.last_name+user.first_name} onClick={props.chatUserList} title={user.last_name + ' ' + user.first_name} data={user.id}>
                                        <div>
                                            <img src={require('../../../assets/user.png')} title={user.last_name+user.first_name} alt="user_logo_image" />
                                        </div>
                                        <div className={classes.ContactListUsername} key={user.id} title={user.last_name + ' ' + user.first_name}>{user.last_name + ' ' + user.first_name}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ContactList;