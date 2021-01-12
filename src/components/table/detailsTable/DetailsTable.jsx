import React from "react";
import CoinContext from "./../../../context/coinContext";
import { useContext } from "react";
import "./DetailsTable.scss";

const DetailsTable = () => {
  const coinContext = useContext(CoinContext);
  const { details, loading } = coinContext;
  return (
    <>
      {loading === false && (
        <>
          <div className="links">
            <a href={details.links.homepage[0]}>Homepage</a>
            <a href={details.links.official_forum_url[0]}>
              Official Forum Page
            </a>
            <a href={details.links.repos_url.github[0]}>Github Repo</a>
          </div>
          <div className="links">
            <h1>
              Facebook Username:{" "}
              <em>
                {details.links.facebook_username !== ""
                  ? details.links.facebook_username
                  : "N/A"}
              </em>
            </h1>
            <h1>
              Tweeter Screen Name:{" "}
              <em>
                {details.links.twitter_screen_name !== ""
                  ? details.links.twitter_screen_name
                  : "N/A"}
              </em>
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default DetailsTable;
