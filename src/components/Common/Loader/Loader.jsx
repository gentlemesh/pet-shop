import Logo from '../../../assets/logo.svg';
import styles from './Loader.module.css';

function Loader() {
    return (
        <div className={styles.container}>
            <div className={styles.stain}></div>
            <div className={styles.backdrop}></div>
            <img className={styles.logo} src={Logo} />
        </div>
    );
}

export default Loader;