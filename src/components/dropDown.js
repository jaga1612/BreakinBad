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
        <button
          key={val}
          onClick={() => {
            setShow("");
            props.setPerPage(val);
          }}
          className="dropdown-item"
          type="button"
        >
          {val}
        </button>
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
          {props.perPage}
        </button>
        <ul className={`dropdown-menu ${show}`}>
          <li>{dropDownValue()}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
