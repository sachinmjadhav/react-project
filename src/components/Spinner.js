import React from "react";
import Loader from "../loader.gif";

export default function Spinner() {
  return (
    <div style={{ width: "100%", marginLeft: "25vw" }}>
      <img src={Loader} alt="" />
    </div>
  );
}
