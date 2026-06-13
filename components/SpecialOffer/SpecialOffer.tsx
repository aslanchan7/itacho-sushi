import HomeScreenLine from '../HomeScreenLine'
import Accordion from '../Misc/Accordion'
import styles from './SpecialOffer.module.css'

export default function SpecialOffer() {
    return (
        <section className={styles.container}>
            <h3>SPECIAL OFFERS</h3>
            <HomeScreenLine />
            <Accordion />
        </section>
    )
}