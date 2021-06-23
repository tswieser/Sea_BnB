import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormPage from '../SignupFormPage'
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>

        <LoginFormModal />

        <SignupFormPage />

      </>
    );
  }

  return (
    <ul>
      <li className="nav_bar" >
        <NavLink exact to="/" ><i className="fas fa-anchor fa-2x"></i></NavLink>
        {isLoaded && sessionLinks}
      </li>
      <li>
        <NavLink exact to='/api/docks'>Docks</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
