import React from "react";

const Square = (props) => {
  return (
    <div className="square" onClick={props.onClick}>
      <h5>{props.value}</h5>
      console.log(props.value);
    </div>
  );
};

export default Square;
