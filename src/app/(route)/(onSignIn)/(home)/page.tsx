import Banner from "./_component/Banner";
import styles from './home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Banner />
        </div>
    );
}