import * as React from "react";

import pkg from "../../package.json";

export default function(): JSX.Element {
  return (
    <div className='lodestar-footer'>
      <span className='content has-text-centered'>
        Made with ❤️ by <a href='https://chainsafe.io'>ChainSafe Systems</a>
      </span>
      <span className='content has-text-centered is-small is-family-code'>
        <span style={{float: 'right'}}>
          <a
            href='https://github.com/ChainSafe/lodestar'>
            GitHub Monorepo
          </a>
        </span>
      </span>
    </div>
  );
}
