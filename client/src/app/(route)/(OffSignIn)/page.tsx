import React from 'react'
import styles from './_css/login.module.css';
import ContentSection from './_component/ContentSection';
import { auth } from '@/auth';

export default async function page() {

    const { user } = await auth();

    console.log(user)

    return (
        <div className={styles.container}>
            <div className={styles.backdrop_image} />
            <div className={styles.content_box}>
                <ContentSection />
            </div>
        </div>
    )
}
