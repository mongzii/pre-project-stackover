import { useNavigate } from "react-router-dom";


import { StyledNavList, StyledNavBar } from "../styles/StyledNavBar";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <StyledNavBar>
        <div>stackoverflow</div>
        <div>about</div>
        <div>Products</div>
        <div>For Teams</div>
        <input
          type="text"
          placeholder="search"
        ></input>
        <button>Log in</button>
        <button>Sign up</button>
      </StyledNavBar>
      <StyledNavList>
        <li onClick={() => navigate("/questions")}>Questions</li>
        <li onClick={() => navigate("/tags")}>Tags</li>
        <li onClick={() => navigate("/users")}>Users</li>
        <li onClick={() => navigate("/companies")}>Companies</li>
      </StyledNavList>
    </div>
  );
};

export default NavBar;
