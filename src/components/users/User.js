import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, getUserRepo, repos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepo(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    bio,
    login,
    location,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fa fa-check text-success"></i>
        ) : (
          <i className="fa fa-times-circle text-danger"></i>
        )}
        <div className="card grid-2">
          <img
            src={avatar_url}
            className="round-img all-center"
            style={{ width: "150px" }}
            alt=""
          />
          <div className="all-center">
            <h1>{name}</h1>
            <p>
              {location && <Fragment> Location: {location} </Fragment>}
              <br></br>
              {bio && <Fragment> Bio: {bio} </Fragment>}
              Username : {login}
              <br></br>
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark my-1"
              >
                Visit Github Profile
              </a>
            </p>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary"> Followers: {followers}</div>
          <div className="badge badge-light"> Following: {following}</div>
          <div className="badge badge-danger">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};

export default User;
