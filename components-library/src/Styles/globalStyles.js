import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  table {
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 5px;
  }
  th {
    text-align: left;
  }
  }
  body {
  background-color: #fafafa;
}
a {
  color: inherit;
  text-decoration: none;
  &:hover{
    color: inherit;
  text-decoration: none;
  cursor: pointer;
  }
}
button {
  background: none;
  border: none;
  cursor: pointer;
  &:hover{
    background-color: #e7e7e7;
  }
}
`;

export default GlobalStyle;
