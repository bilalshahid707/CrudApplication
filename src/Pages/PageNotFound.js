import React from "react";
import { Link } from "react-router-dom";
export const PageNotFound = () => {
  return (
    <div className="flex items-center  justify-center">
      PageNotFound
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default PageNotFound;
