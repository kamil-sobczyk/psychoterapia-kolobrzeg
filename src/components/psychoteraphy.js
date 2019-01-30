import React, { Component } from "react";

import ListItem from "./listItem";

import { text1, list } from "./data/psychoteraphy";
import runAnimation from "./data/runAnimation";

const list2 = list.map((e, i) => <ListItem text={e.text} key={i} />);

class Psycho extends Component {
  componentDidMount() {
    runAnimation();
  }
  render() {
    return (
      <>
        <div className="page-header">
          <h1>O psychoterapii </h1>
        </div>
        <h3>Czym jest psychoterapia?</h3>
        <p className="description">{text1}</p>
        <h3>Wskazania do podjęcia psychoterapii</h3>
        <ul className={"rolldown-list-small"}>{list2}</ul>
      </>
    );
  }
}

export default Psycho;
