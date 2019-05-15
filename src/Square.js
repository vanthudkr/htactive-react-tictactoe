import React from "react";

export function Square(props) {
  return (
    <button
      className={"square" + (props.value === "X" ? " green" : " red")}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
