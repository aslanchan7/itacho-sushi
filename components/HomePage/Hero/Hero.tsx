import Image from 'next/image'
import styles from './Hero.module.css'
import ViewMenuButton from './ViewMenuButton'
import HeroTitle from './HeroTitle'

export default function Hero() {
    return (
        <section className={styles.heroSection}>
            <Image 
                src={'/images/hero/hero.png'}
                alt=''
                width={10000}
                height={10000}
                className={styles.heroBgImage}
            />

            <div className={styles.heroTitleWrapper}>
                <HeroTitle />
            </div>

            <div className={styles.viewMenuButtonWrapper}>
                <ViewMenuButton />
            </div>

            <Image 
                src={'/images/hero/moving-arrow.svg'}
                alt=''
                width={10000}
                height={10000}
                className={styles.movingArrow}
            />

        </section>
    )
}