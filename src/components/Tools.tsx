import React from "react";
import AppCard from './AppCard';

type Props = {};
type State = {};

export default class Tools extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const items = [
      {
        title: 'BLS Keygen', 
        url: 'https://bls-keygen.com', 
        description: 'Eth2 web utility for deriving children BLS keys from a master BLS key, which are then encrypted and bundled together in a downloadable format for use in Eth2 testnets.'},
      {
        title: 'Simple Serialize', 
        url: 'https://simpleserialize.com', 
        description: 'Simple Serialize (SSZ) is a serialization and merkleization standard created specifically for Eth2.'},
      {
        title: 'ENR App', 
        url: 'https://something.com', 
        description: 'Decodes ENR objects'},
    ];

    return <>
      <div className="container">
        <div className="lodestar-columns columns is-centered">
          {items.map(item => (
            <AppCard title={item.title} url={item.url} description={item.description} />
          ))}
        </div>
      </div>
    </>;
  }
}
