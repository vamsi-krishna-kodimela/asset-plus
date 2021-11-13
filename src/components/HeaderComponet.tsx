import React from "react";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";

const HeaderComponet = (props: any) => {
  const title = props.title ?? "";
  const onSave = props.onSave;

  const onSearch = props.onSearch;
  return (
    <div className="header-component d-flex px-4 py-2 justify-content-between align-items-center">
      {title === "Add New Image" ? (
        <div className="btn"></div>
      ) : (
        <Link className="btn" to="/create">
          <i className="fa-solid fa-plus"></i>
        </Link>
      )}
      <h1 className="h1">{title}</h1>
      {title === "Add New Image" ? (
        <button className="btn btn-success" onClick={onSave}>
          Save
        </button>
      ) : (
        <div className="search-box">
          <input
            type="text"
            placeholder="SEARCH"
            onChange={(event) => {
              let key = event.target.value.trim();
              onSearch(key);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HeaderComponet;
