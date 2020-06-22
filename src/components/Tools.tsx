import React from "react";
import AppCard from './AppCard';
import bls from "./images/bls.svg";
import ssz from "./images/ssz.svg";
import enr from "./images/enr.svg";

type Props = {};
type State = {};

export default class Tools extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): JSX.Element {
    const items = [
      {
        title: 'BLS Keygen', 
        url: 'https://bls-keygen.com', 
        icon: bls,
        description: 'Generate or restore a BLS master key and derive validator keys.'},
      {
        title: 'Simple Serialize', 
        url: 'https://simpleserialize.com', 
        icon: ssz,
        description: 'Serialize and deserialize common ssz types.'},
      {
        title: 'ENR App', 
        url: 'https://no-site.yet', 
        icon: enr,
        description: 'Decode ENR objects'},
    ];

    return <>
      <div className="container">
        <div className="lodestar-columns columns is-centered">
          {items.map(item => (
            <AppCard title={item.title} url={item.url} description={item.description} icon={item.icon} />
          ))}
        </div>
      </div>
    </>;
  }
}
