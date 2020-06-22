import * as React from "react";
import fullSize from "./images/FullMark-BLACK.png";

export default function(): JSX.Element {
  return (
    <div className='section'>
      <span className='container lodestar-header'>
        <img
          className="attachment-full size-full lodestar-logo"
          src={fullSize}
          data-recalc-dims="1"
          alt="Lodestar icon"
        />
      </span>
      <span className="heading-tagline">Utility apps made and used by <a href="https://chainsafe.github.io/lodestar/">Lodestar</a>, Ethereum 2.0 in Typescript.</span>
    </div>
  );
}
