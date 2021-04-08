import React from 'react';
import 'styled-components/macro';
import { Link } from 'react-router-dom';
import * as Styles from './header-styles';

const Header = () => (
  <Styles.HeaderDiv>
    <Styles.NavbarDiv>
      <div>
        <Link to='/'>
          <span
            css={`
              padding: 0 3rem;
            `}
          >
            GS UI Library
          </span>
        </Link>
      </div>
      <div>
        <Link to='/components-overview'>
          <span
            css={`
              padding-left: 2rem;
              padding-right: 1rem;
            `}
          >
            Components
          </span>
        </Link>
        <Link to='/guides-overview'>
          <span
            css={`
              padding-left: 1rem;
            `}
          >
            Guides
          </span>
        </Link>
      </div>
    </Styles.NavbarDiv>
  </Styles.HeaderDiv>
);

export default Header;
