import styles from './Header.module.css';
import blueLogo from '../assets/logo.png';
export function Header(){
    return (
        <header className={styles.header}>
        <img src={blueLogo} alt="Logotipo da blue" />
        <strong>GroupS 2.0</strong>
      </header>
    )
}