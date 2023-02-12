import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "styles/pages/NotFound.sass";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="notfound">
      <div className="notfound__content">
        <h1 className="notfound__code">404</h1>
        <h4 className="notfound__text">Page not found!</h4>
        <p className="notfound__message">You will be redirected to home page in 3 seconds...</p>
      </div>
    </div>
  );
};

export default NotFound;
