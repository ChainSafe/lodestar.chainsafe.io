import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Tools from "./components/Tools";
import BeaconNode from "./components/BeaconNode";

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <BeaconNode />
      <Tools />
      <Footer />
    </>
  );
}
