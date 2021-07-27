import React from "react";
import AppCard from "./AppCard";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import lodestarLogo from "./images/lodestar_icon_text_black.png";

export default function BeaconNode(): JSX.Element {
  return (
    <>
      <div className="container">
        <div className="beacon-node">
          <img className="" src={lodestarLogo} alt="Lodestar logo" />

          <p className="title is-4">
            TypeScript Implementation of the Beacon Chain
          </p>

          <div className="content">
            Lodestar is an open-source Ethereum Consensus (Eth2) client and
            Typescript ecosystem, maintained by ChainSafe Systems
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chainsafe.github.io/lodestar/"
          >
            Try it out
          </a>
        </div>
      </div>
    </>
  );
}
