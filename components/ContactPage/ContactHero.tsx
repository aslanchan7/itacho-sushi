import styles from './ContactHero.module.css';
import Image from 'next/image';

export default function ContactHero() {
    return (
        <section className={styles.heroSection}>
            <Image 
                src={'/images/contact/contact-hero-image.png'}
                alt='Itacho Sushi Interior'
                width={10000}
                height={10000}
                className={styles.heroBgImage}
            />

            <Image 
                src={'/images/contact/contact-title.svg'}
                alt='About'
                width={1000}
                height={1000}
                className={styles.titleImg}
            />
        </section>
    )
}