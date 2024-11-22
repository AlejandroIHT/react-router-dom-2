import { useState, useEffect } from "react";

const Router = ({ routes, fallback }) => {
  const [currentPath, setCurrentPath] = useState(
    () => window.location.pathname
  );

  const onLocationChange = () => {
    setCurrentPath(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", onLocationChange);

    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  const route = routes.find((route) => route.path === currentPath);

  return route?.element || fallback;
};

export default Router;
