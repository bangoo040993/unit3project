import styles from './Logo.module.scss';

export default function Logo() {
    return (
        <div className={styles.Logo}>
            <div className={styles.glitch}>
                BANG 
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
