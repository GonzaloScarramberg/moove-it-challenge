import React from 'react';
import 'styled-components/macro';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const UsageOverview = () => (
  <div
    css={`
      padding: 1rem;
      @media (max-width: 700px) {
        padding: 2rem;
      }
    `}
  >
    {' '}
    <h1>Usage Example</h1>
    <p>
      The usage of the GS UI Library is very simple! You just need to import the
      component that you want to use in your project, customize it and you are
      ready to go! Here is an example of how you can import and use the
      component
    </p>
    <SyntaxHighlighter wrapLines language='javascript' style={a11yDark}>
      {`import { GSButton } from 'gs-ui-library'

const ExampleComponent = () =>{
<h1>This is an example of the use of the GSButton component</h1>
<GSButton color="primary" size="small" />
}
        `}
    </SyntaxHighlighter>
    <p>
      You can check the components page to learn how to import every component
      and all the features you can choose to customize them
    </p>
  </div>
);

export default UsageOverview;
