import styled from 'styled-components';

const HeaderDiv = styled.div`
  background-color: #0c0a3e;
  padding: 1rem;
  position: fixed;
  width: 100%;
  display: flex;
  top: 0;
  z-index: 1001;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
`;

const NavbarDiv = styled.nav`
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-evenly;
`;

export { HeaderDiv, NavbarDiv };
