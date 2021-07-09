import React from "react";
import AppCard from './AppCard';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import bls from "./images/bls.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ssz from "./images/ssz.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import enr from "./images/enr.svg";

export default class Tools extends React.Component {
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
        url: 'https://enr-viewer.com',
        icon: enr,
        description: 'Decode ENR objects'},
    ];

    return <>
      <div className="container">
        <div className="lodestar-columns columns is-centered is-vcentered">
          {items.map(item => (
            <AppCard title={item.title} url={item.url} description={item.description} icon={item.icon} />
          ))}
        </div>
      </div>
    </>;
  }
}
