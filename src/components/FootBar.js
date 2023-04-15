import { useNavigate } from "react-router-dom";

import { StyledFootBar } from "../styles/StyledFootBar";

const FootBar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <StyledFootBar>
             <ul onClick={() => navigate("/stackoverfoot")}>STACK OVERFLOW</ul>
             <ul onClick={() => navigate("/productsfoot")}>PRODUCTS</ul>
             <ul onClick={() => navigate("/companyfoot")}>COMPANY</ul>
             <ul onClick={() => navigate("/stacknetworkfoot")}>STACK EXCHANGE NETWORK</ul>
             </StyledFootBar>
        </div>
    )
};

export default FootBar;