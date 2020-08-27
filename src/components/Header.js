import React from "react";

function Header({ query, setQuery }) {
  return (
    <div className="py-3 header position-sticky sticky-top">
      <div className="container d-flex align-items-center">
        <h4 className="mr-2">CourseHERO</h4>
        <input
          type="text"
          placeholder="What you want to learn today?"
          value={query}
          className=" ml-md-5 form-control search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Header;
