import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  border : 3px solid orange;
  

  >  * {
    list-style: none;
    cursor: pointer;
    
    padding: 10px;
  }
`;


export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;

  > li {
    list-style: none;
    cursor: pointer;
  }
`;
