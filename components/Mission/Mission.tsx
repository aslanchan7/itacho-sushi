import HomeScreenLine from '../HomeScreenLine'
import styles from './Mission.module.css'
import Image from 'next/image'

export default function Mission() {
    return (
        <section className={styles.container}>
            <h3>ITACHO'S MISSION</h3>
            <HomeScreenLine />
            <p>Crafted with the freshest ingredients, our{' '}<span className={styles.highlightText}>AYCE (all-you-can-eat)</span>{' '}selections deliver an exquisite taste of authentic Japanese cuisine.</p>
            <p>We at Itacho are dedicated to serving our San Diego community with{' '}<span className={styles.highlightText}>high-quality, handmade food at an affordable price.</span></p>

            <Image 
                src={'/images/mission/mission-food.png'}
                alt='Sashimi'
                width={1000}
                height={1000}
                className={styles.foodImg}
            />
        </section>
    )
}