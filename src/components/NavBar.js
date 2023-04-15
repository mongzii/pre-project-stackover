import { useNavigate } from "react-router-dom";

import { StyledNavBar, StyledNavList } from "../styles/StyledNavBar";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
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
