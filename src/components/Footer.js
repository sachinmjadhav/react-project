import React from "react";

export default function Footer() {
  return (
    <div className=" p-3 text-center bg-dark text-white">
      <p>
        &copy; Copyright 2019 | <span className="text-primary">BOOKSTORE</span>
      </p>
      <p>
        <span className="px-3" style={{ cursor: "pointer" }}>
          About Us
        </span>{" "}
        |{" "}
        <span className="px-3" style={{ cursor: "pointer" }}>
          Contact
        </span>{" "}
        |{" "}
        <span className="px-3" style={{ cursor: "pointer" }}>
          Careers
        </span>
      </p>
    </div>
  );
}
