import styled from 'styled-components';

const HeaderDiv = styled.div`
  background-color: #0c0a3e;
  padding: 1rem;
  position: fixed;
  width: 100%;
  display: flex;
  top: 0;
  z-index: 1001;
`;

const NavbarDiv = styled.nav`
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-evenly;
`;

export { HeaderDiv, NavbarDiv };
