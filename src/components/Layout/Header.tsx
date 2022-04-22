import React from 'react';

import { Menu } from 'semantic-ui-react';
import styles from './Header.module.css';
import RightMenu from './Menus/RightMenu';
import LeftMenu from './Menus/LeftMenu';

import '@aarhus-university/au-designsystem-delphinus/source/style.scss'

/**
 * Header-component. Viser headeren og tjekker at brugeren er logget ind.
 */
export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <header>
      <Menu className={styles.noprint} inverted color="blue" attached borderless>
        <LeftMenu />
        <Menu.Menu position="right">
          <RightMenu />
        </Menu.Menu>
      </Menu>
    </header>
  );
};

export default Header;
