import React, { Fragment } from "react";
import spinner from "../../utils/spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "250px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
