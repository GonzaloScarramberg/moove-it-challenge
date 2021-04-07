import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ThemesOverview = () => (
  <div>
    {' '}
    <h1>Themes</h1>
    <p>
      Theming is available for some properties in the GS UI Library. By default
      those properties are set like this
    </p>
    <SyntaxHighlighter language='javascript' style={a11yDark}>
      {`const DefaultTheme = {
palette: {
primary: { main: '#2196f3', dark: '#3f91d4' },
secondary: { main: '#797c7e', dark: '#656666' },
info: { main: '#0288d1', dark: '#01659b' },
warning: { main: '#d1a102', dark: '#b48b02' },
danger: { main: '#dd0101', dark: '#c00000' },
},
typography: {
fontFamily: [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
].join(','),
},
};`}
    </SyntaxHighlighter>
    <p>
      In order to change the themes, you can create a new one. The format has to
      be the same as the default one. Once you have it you can override the
      default theme like this
    </p>
    <SyntaxHighlighter language='javascript' style={a11yDark}>
      {`import {GSButton, Theme} from 'gs-ui-library'


<Theme theme={theme}>
<GSButton />
</Theme>`}
    </SyntaxHighlighter>
    <p>
      You need to import Theme and the component has to be wrapped inside it.
      With the theme property you can add you custom themes and override the
      existing one
    </p>
  </div>
);

export default ThemesOverview;
