import React from 'react';
import classes from './Header.module.css';

const Header = props => {
    return (
        <div className={classes.Header}>
            <div className={classes.HeaderUsers}>
                <div className={classes.HeaderImage}><img src={require('../../../assets/user.png')} alt="user_logo_image" /></div>
                <div className={classes.HeaderUsername}>{props.chatUser}</div>
                <div className={classes.HeaderWrapper}>
                    <div className={classes.HeaderMagnifier}>
                        &#8981;
                    </div>
                    <div>
                        <input type="text" className={classes.HeaderInput} placeholder="Search in Messages" />
                    </div>
                </div>
                <div className={classes.HeaderButtonWrapper}>
                    <div className={classes.HeaderButton}>&#9776;</div>
                </div>
            </div>
        </div>
    )
}

export default Header;