import React, {memo} from 'react';
import styles from './header.module.css';
const Header = memo((props) => (
    <header className={styles.homeHeader}>
      <img className={styles.homeLogo} src="/images/logo.png" alt="logo" />
      <button className={styles.logout} onClick={props.onLogout}>
        logout
      </button>
      <div className={styles.headerTitle}>Business Card Maker</div>
    </header>
            
    ));

export default Header;