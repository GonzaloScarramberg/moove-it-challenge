import styled from 'styled-components';

const SidebarDiv = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  @media (max-width: 700px) {
    height: 100px;
    border: none;
  }
`;

const SidebarTitle = styled.div`
  background: #0c0a3e;
  color: white;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  justify-content: center;
  padding: 1rem;
  @media (max-width: 700px) {
    display: none;
  }
`;

const SidebarOptionsList = styled.div`
  display: flex;
  flex-direction: column;
  height: 55%;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 700px) {
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }
`;

const SidebarItemButton = styled.button`
  align-items: center;
  width: 100%;
  display: flex;
  font-size: 1rem;
  flex: 1 1 auto;
  padding: 1rem;
  background-position: center;
  transition: background 0.5s;
  @media (max-width: 700px) {
    justify-content: center;
    height: 100%;
    width: auto;
  }

  &:hover {
    background: #c9c9f3 radial-gradient(circle, transparent 1%, #c9c9f3 1%)
      center/15000%;
  }
  &:active {
    background-color: #9191dc;
    background-size: 100%;
    transition: background 0s;
  }
  &:focus {
    color: #9191dc;
    outline: solid 1px #9191dc;
  }
`;

export { SidebarDiv, SidebarTitle, SidebarOptionsList, SidebarItemButton };
