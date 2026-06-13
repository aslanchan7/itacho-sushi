import styles from './AboutHero.module.css';
import Image from 'next/image';

export default function AboutHero() {
    return (
        <section className={styles.heroSection}>
            <Image 
                src={'/images/about/about-hero-image.png'}
                alt='Itacho Sushi Interior'
                width={10000}
                height={10000}
                className={styles.heroBgImage}
            />

            <Image 
                src={'/images/about/about-title.svg'}
                alt='About'
                width={1000}
                height={1000}
                className={styles.titleImg}
            />
        </section>
    )
}