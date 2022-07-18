import React, { Component } from "react";
import styles from "../css/item.module.css";

export default class Item extends Component {
  render() {
    let { icon, title, describe } = this.props.item;
    return (
      <div className="col-lg-6 col-xxl-4 mb-5">
        <div className="card bg-light border-0 h-100">
          <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
            <div
              className={`${styles.feature} bg-primary bg-gradient text-white rounded-3 mb-4 `}
            >
              <i className={`${icon}`} />
            </div>
            <h2 className="fs-4 fw-bold">{title}</h2>
            <p className="mb-0">{describe}</p>
          </div>
        </div>
      </div>
    );
  }
}
