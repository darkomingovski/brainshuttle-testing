import React from 'react';
import classes from './SearchContacts.module.css';

const searchContacts = props => {
    return (
        <div className={classes.SearchContacts}>
            <div className={classes.SearchContactsWrapper}>
                <div className={classes.SearchContactsMagnifier}>
                    &#8981;
            </div>
                <div>
                    <input type="text" className={classes.SearchContactsInput} placeholder="Search Contacts" />
                </div>
            </div>
        </div>
    )
}

export default searchContacts;