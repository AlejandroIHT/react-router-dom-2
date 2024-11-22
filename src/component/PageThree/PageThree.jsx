import useNavigate from "../../hooks/useNavigate";

const PageThree = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/two");
  };

  return (
    <div>
      <h3>Page Three</h3>
      <button onClick={handleClick}>Go to Page Two</button>
    </div>
  );
};

export default PageThree;
