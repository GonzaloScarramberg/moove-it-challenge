import styled from 'styled-components';

const SidebarDiv = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const SidebarTitle = styled.div`
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  justify-content: center;
  padding: 1rem;
`;

const SidebarOptionsList = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  justify-content: space-between;
`;

const SidebarItemButton = styled.button`
  font-size: 1rem;
  flex: 1 1 auto;
  padding: 1rem;
`;

export { SidebarDiv, SidebarTitle, SidebarOptionsList, SidebarItemButton };
