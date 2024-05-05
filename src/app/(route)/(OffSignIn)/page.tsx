import React from 'react'
import styles from './_css/login.module.css';
import ContentSection from './_component/ContentSection';

export default function page() {
    return (
        <div className={styles.container}>
            <div className={styles.backdrop_image} />
            <div className={styles.content_box}>
                <ContentSection />
            </div>
        </div>
    )
}
