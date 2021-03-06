import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>

            <button onClick={openMenu} className="profile_btn" >
                <i className="fas fa-user"></i>
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li className="user_info">{user.username}</li>
                    <li className="user_info">{user.email}</li>
                    <li className="user_info">
                        <NavLink exact to="/api/reservation">My Reservations</NavLink>
                    </li>
                    <li>
                        <button className="logOut_btn"onClick={logout}>Log Out</button>
                    </li>

                </ul>
            )}
        </>
    );
}

export default ProfileButton;
