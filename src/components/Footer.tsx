import * as React from "react";

import pkg from "../../package.json";

export default function(): JSX.Element {
  return (
    <div className='lodestar-footer'>
      <span className='content has-text-centered is-small is-family-code'>
        Made with ❤️ by <a href='https://chainsafe.io'>ChainSafe Systems</a>
      </span>
      <span className='content has-text-centered is-small is-family-code'>
        <span style={{float: 'right'}}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href='https://github.com/ChainSafe/lodestar'>
            GitHub Monorepo
          </a>
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ethereum.org/learn/#eth-2-0">
            What is Ethereum 2.0?</a>
        </span>
      </span>
    </div>
  );
}
