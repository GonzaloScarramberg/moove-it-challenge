import styled, { css } from 'styled-components';

const LibraryPageDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 120px);
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const FeatureField = styled.div`
  padding-bottom: 2rem;
`;

const ExampleFeatureList = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 3px;
  grid-row-gap: 20px;
  width: 100%;
  flex-direction: ${(props) =>
    props.componentName === 'GSButton' ? 'row' : 'column'};
  flex-wrap: wrap;
  align-items: center;
`;

const ExampleFeatureField = styled.div`
  padding: 2rem 1rem;
  width: ${(props) => props.componentName !== 'GSButton' && css`70%`};
`;

const APITableField = styled.div`
  padding: 2rem 0rem;
`;

const APIValueDescription = styled.td`
  font-family: Courier New, monospace;
`;

const APIDefaultValue = styled.td`
  color: #0c0a3e;
  font-weight: bold;
`;

export {
  LibraryPageDiv,
  FeatureField,
  APITableField,
  ExampleFeatureList,
  ExampleFeatureField,
  APIValueDescription,
  APIDefaultValue,
};
