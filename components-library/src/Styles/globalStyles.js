import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  table {
  
  font-size: 13px;
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 10px;
    border-bottom: 0.2px solid #E8E9E8;
  }
  th {
    text-align: left;
    color:gray
  }
  tbody {
    border-radius: 8px;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
          0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  }
  }
  body {
  background-color: #fafafa;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
button {
  background: none;
  border: none;
  cursor: pointer;
  &:hover{
    background-color: #e7e7e7;
  }
}
p{
  line-height:1.5;
}

`;

export default GlobalStyle;
