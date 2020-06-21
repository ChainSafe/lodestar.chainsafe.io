import * as React from "react";

import pkg from "../../package.json";

export default function(): JSX.Element {
  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        Made with ❤️ by <a className='is-link has-text-danger is-family-code' href='https://chainsafe.io'>ChainSafe Systems</a>
      </div>
      <div className='content has-text-centered is-small is-family-code'>
        <div>
          <a className='is-link has-text-grey'
            href='https://bls-keygen.com'>
            https://bls-keygen.com
          </a>
        </div>
        <div>
          <a className='is-link has-text-grey'
            href='https://simpleserialize.com'>
            https://simpleserialize.com
          </a>
        </div>
      </div>
    </footer>
  );
}
