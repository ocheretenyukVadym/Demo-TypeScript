import React from 'react';
import './Header.scss'
import {Link} from 'react-router-dom';
import { HeaderPropsType } from '../../Common/types';

const Header: React.FC<HeaderPropsType> = ({isUserPage}) => {
    return(
        <div className="header-container">
            <nav className="navb-light">
                <ul className="navb-nav pages">
                    <li>
                        { isUserPage? <Link className="nav-item active" to='/userPage'>Users</Link> :
                        <Link className="nav-item" to='/userPage'>Users</Link>}
                    </li>
                    <li>
                        { !isUserPage? <Link className="nav-item active" to='/ticketPage'>Tickets</Link> :
                        <Link className="nav-item" to='/ticketPage'>Tickets</Link>}
                    </li>
                </ul>
                <ul className="navb-nav recycle-bin">
                    <li>
                        <Link className="nav-item" to='/recycleBin'>
                            { false ? <img className ="header-ico active" src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=recycle-bin" alt=""/>
                             : <img className ="header-ico" src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=recycle-bin" alt=""/>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;