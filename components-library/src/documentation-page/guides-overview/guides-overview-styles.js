import styled from 'styled-components';

const DocumentationPageDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export default DocumentationPageDiv;
