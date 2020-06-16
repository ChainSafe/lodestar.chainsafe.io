import React from "react";

type Props = {
  title: string,
  icon: string,
  url: string,
  description: string,
};

const AppCard = ({title, url, description}: Props): JSX.Element => (
  <a target="_blank" rel="noopener noreferrer" href={url}>
    <button
    >
      <div className="card">
        <div className="card-image">
          {
            // <figure className="image is-4by3">
            //   <img src={icon} alt="App image" />
            // </figure>
          }
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