import React from 'react';
import styles from './button.module.css';

const Button = ({name, onClick}) => (
    <button>
        <button className={styles.button} onClick={onClick}>{name}</button>
    </button>
            
    );

export default Button;