import * as React from "react";
import fullSize from "./images/FullMark-BLACK.png";

export default function(): JSX.Element {
  return (
    <div className='section'>
      <div className='container lodestar-header'>
        <img
          className="attachment-full size-full"
          src={fullSize}
          data-recalc-dims="1"
          alt="Lodestar icon"
        />
        <h1 className='title is-family-code'>
          Browser Tools
        </h1>
      </div>
    </div>
  );
}
