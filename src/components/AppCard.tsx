import React from "react";

type Props = {
  title: string,
  icon: string,
  url: string,
  description: string,
};

const AppCard = ({title, url, description, icon}: Props): JSX.Element => (
  <a target="_blank" rel="noopener noreferrer" href={url}>
    <button
    >
      <div className="card">
        <div className="card-image">
            <img className="app-icon" src={icon} alt="App image" />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">
            {description}
          </div>
        </div>
      </div>
    </button>
  </a>
);

export default AppCard;