import useNavigate from "../../hooks/useNavigate";

const PageTwo = () => {
  const navigate = useNavigate();

  const handleOneClick = () => {
    navigate("/");
  };
  const handleThreeClick = () => {
    navigate("/three");
  };

  return (
    <div>
      <h3>Page Two</h3>
      <button onClick={handleOneClick}>Go to Page One</button>
      <button onClick={handleThreeClick}>Go to Page Three</button>
    </div>
  );
};

export default PageTwo;
