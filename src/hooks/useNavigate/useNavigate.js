const useNavigate = () => {
  const navigate = (href) => {
    const navigationEvent = new PopStateEvent("popstate");

    window.history.pushState(null, "", href);
    window.dispatchEvent(navigationEvent);
  };

  return navigate;
};

export default useNavigate;
