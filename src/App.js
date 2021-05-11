import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import User from "./components/users/User.js";
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

const App = () => {
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);

  //get random users data
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       setLoading(true);
  //       const res = await Axios.get(
  //         `https://api.github.com/users?client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //       );
  //       setUsers(res.data);
  //       setLoading(false);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   })();
  // }, []);

  //get  user repos data

  //clear users

  //alert for empty search

  //

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Git Finder" />
            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route title="About Us" exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
