import styled from 'styled-components';

const DocumentationPageDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 120px);
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export default DocumentationPageDiv;
