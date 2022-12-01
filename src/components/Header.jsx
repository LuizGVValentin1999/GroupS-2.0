import styles from './Header.module.css';
import igniteLogo from '../assets/logo.png';
export function Header(){
    return (
        <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do Ignite" />
        <strong>GroupS 2.0</strong>
      </header>
    )
}