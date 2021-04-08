import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeDiv = styled.div`
  height: 359px;
  display: flex;
  color: #0c0a3e;
  justify-content: center;
  padding: 3.4rem 0;
`;

const LibraryText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 700px) {
    align-items: center;
  }
  h1 {
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 0;
    @media (max-width: 700px) {
      font-size: 3.5rem;
    }
  }
  h2 {
    font-weight: 300;
  }
`;

const GetStartedLink = styled(Link)`
  background: #0c0a3e;
  height: 2rem;
  border-radius: 5px;
  display: flex;
  color: white;
  align-items: center;
  padding: 0.5rem;
  width: 25%;
  justify-content: center;
  &:hover {
    color: white;
  }
`;

export { HomeDiv, LibraryText, GetStartedLink };
