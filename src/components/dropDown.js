import React, { useState } from "react";

const Dropdown = function (props) {
  const [show, setShow] = useState("");

  const root = document.querySelector("#root");

  root.addEventListener("click", (e) => {
    if (!e.target.classList.contains("dropdown-toggle")) {
      setShow("");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setShow("");
    }
  });

  const dropDownValue = () => {
    return props.dropDownValue.map((val) => {
      return (
        <li
          key={val}
          onClick={() => {
            setShow("");
            props.setPerPage(val);
          }}
          className="dropdown-item"
          type="button"
        >
          {val}
        </li>
      );
    });
  };

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          onClick={() => {
            setShow(show ? "" : "show");
          }}
          type="button"
        >
          {props.perPage} / Page
        </button>
        <ul className={`dropdown-menu ${show}`}>{dropDownValue()}</ul>
      </div>
    </div>
  );
};

export default Dropdown;
