import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Swarm from './pages/Swarm';

const [test, setTest] = React.useState(null);

React.useEffect(() => {
  fetch('/api/test')
    .then(response => response.json())
    .then(result => {
      setTest(result);
    });
}, []);

function App() {
  const [showLogin, setShowLogin] = React.useState(true);
  return (
    <>
      {test && (
        <div>
          {test.title}: {test.message}
        </div>
      )}
      <Router>
        <Header onLoginButtonClick={() => setShowLogin(!showLogin)} />
        <main>
          <Switch>
            <Route exact path="/">
              <Home showLogin={showLogin} />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/profile/:userId">
              <Profile />
            </Route>
            <Route path="/swarm">
              <Swarm />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
