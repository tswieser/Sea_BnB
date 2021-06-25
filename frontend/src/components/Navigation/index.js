import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <div className='user_btns'>
          <LoginFormModal />

          <SignupFormPage />
        </div>
      </>
    );
  }

  return (
    <ul id="nav_container">
      <li className="nav_bar" >
        <NavLink exact to="/" ><i className="fas fa-anchor fa-4x"></i></NavLink>
        <div id="site_title">Sea BnB</div>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
