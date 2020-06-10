import React from "react";


type Props = {};
type State = {};

export default class Tools extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return <>
      <div className="container">
        <div className="lodestar-columns columns is-centered">
          <div className="column">
            <a target="_blank" rel="noopener noreferrer" href="https://bls-keygen.com"><button className="button is-primary">BLS Keygen</button></a>
          </div>
          <div className="column">
            <a target="_blank" rel="noopener noreferrer" href="https://simpleserialize.com"><button className="button is-primary">Simple Serialize</button></a>
          </div>
          <div className="column">
            <button className="button is-primary">ENR App (WIP)</button>
          </div>
        </div>
      </div>
    </>;
  }
}
