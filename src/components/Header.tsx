import * as React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import fullSize from "./images/FullMark-BLACK.png";

export default function(): JSX.Element {
  return (
    <div className='section'>
      <img
        className="attachment-full size-full lodestar-logo"
        src={fullSize}
        data-recalc-dims="1"
        alt="Lodestar icon"
      />
      <span className="heading-tagline">Utility apps made and used by <a target="_blank" rel="noopener noreferrer" href="https://chainsafe.github.io/lodestar/">Lodestar</a>, Ethereum 2.0 in Typescript.</span>
    </div>
  );
}
