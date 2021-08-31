import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import DockPage from "./components/DocksPage";
import ReservationPage from './components/ReservationsPage'
import ConfirmReservationModal from './components/ResReview'
import HomeBrowser from './components/HomePage'


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomeBrowser />
          </Route>
          <Route exact path="/api/docks">
            <DockPage />
          </Route>
          <Route exact path="/api/docks/:dockId">
            <ReservationPage />
          </Route>
          <Route exact path="/api/reservation">
            <ConfirmReservationModal />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
