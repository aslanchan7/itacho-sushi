import Image from 'next/image'
import styles from './HeroTitle.module.css'

export default function HeroTitle() {
    return (
        <div className={styles.container}>
            <Image 
                src={'/images/hero/hero-stroke.svg'}
                alt=''
                width={10000}
                height={10000}
                className={styles.heroStroke}
            />
            
            <Image 
                src={'/images/hero/hero-title.svg'}
                alt=''
                width={10000}
                height={10000}
                className={styles.heroTitle}
            />
            
            <h2 className={styles.heroSubtitle}>
                PREMIUM ALL-YOU-CAN-EAT
            </h2>
        </div>
    )
}