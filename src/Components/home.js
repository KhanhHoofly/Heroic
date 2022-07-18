import React, { Component } from "react";
import Header from "./header";
import Banner from "./banner";
import Content from "./content";
import Footer from "./footer";
// import styles from "../css/home.module.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Content />
        <Footer />
      </div>
    );
  }
}
