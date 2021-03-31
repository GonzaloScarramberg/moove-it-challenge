import styled, { css } from 'styled-components';

const FeatureField = styled.div`
  padding: 2rem 0rem;
`;

const APITableField = styled.div`
  padding: 2rem 0rem;
`;

const ExampleFeatureList = styled.div`
  display: flex;
  flex-flow: wrap;
  grid-row-gap: 20px;
  width: 100%;
  flex-direction: ${(props) =>
    props.componentName === 'GSButton' ? 'row' : 'column'};
  justify-content: center;
  align-items: center;
`;

const ExampleFeatureField = styled.div`
  flex: ${(props) =>
    props.componentName === 'GSButton' ? css`1 1 20%` : css`1 1 60%`};
`;

export { FeatureField, APITableField, ExampleFeatureList, ExampleFeatureField };
