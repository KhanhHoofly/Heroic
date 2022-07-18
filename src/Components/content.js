import React, { Component } from "react";
import Item from "./item";
// import styles from "../css/content.module.css";

export default class Content extends Component {
  data = [
    {
      id: 1,
      icon: "bi bi-collection",
      title: "Fresh new layout",
      describe:
        "With Bootstrap 5, we've created a fresh new layout for this template!",
    },
    {
      id: 2,
      icon: "bi bi-cloud-download",
      title: "Free to download",
      describe:
        "As always, Start Bootstrap has a powerful collection of free templates.",
    },
    {
      id: 3,
      icon: "bi bi-card-heading",
      title: "Jumbotron hero header",
      describe:
        "The heroic part of this template is the jumbotron hero header!",
    },
    {
      id: 4,
      icon: "bi bi-bootstrap",
      title: "Feature boxes",
      describe:
        "We've created some custom feature boxes using Bootstrap icons!",
    },
    {
      id: 5,
      icon: "bi bi-code",
      title: "Simple clean code",
      describe:
        "We keep our dependencies up to date and squash bugs as they come!",
    },
    {
      id: 6,
      icon: "bi bi-patch-check",
      title: "A name you trust",
      describe:
        "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },
  ];
  renderItem = () => {
    return this.data.map((item) => {
      return <Item key={item.id} item={item} />;
    });
  };
  render() {
    return (
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">{this.renderItem()}</div>
        </div>
      </section>
    );
  }
}
