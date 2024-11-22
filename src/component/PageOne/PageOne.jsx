import useNavigate from "../../hooks/useNavigate";

const PageOne = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/two");
  };

  return (
    <div>
      <h3>Page One</h3>
      <button onClick={handleClick}>Go to Page Two</button>
    </div>
  );
};

export default PageOne;
