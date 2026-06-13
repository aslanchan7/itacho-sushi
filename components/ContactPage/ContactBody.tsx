import AboutScreenLine from '../AboutPage/AboutScreenLine';
import styles from './ContactBody.module.css';
import Image from 'next/image';

export default function ContactBody() {
    return (
        <section className={styles.container}>
            <div className={styles.infoContainer}>
                <div>
                    <h2>CONTACTS</h2>
                    <AboutScreenLine />
                    <p>Phone:{' '}<span>(858) 737-4189</span></p>
                    <p>Email: itachosushi.marketing@gmail.com</p>
                </div>

                <div>
                    <h2>ADDRESS</h2>
                    <AboutScreenLine />
                    <p><span>7319</span>{' Clairemont Mesa Blvd,\nSan Diego, CA '}<span>92111</span></p>
                    <div className={styles.button}>
                        <p>GET DIRECTIONS</p>
                    </div>
                </div>

                <div>
                    <h2>HOURS</h2>
                    <AboutScreenLine />
                    <div className={styles.hoursContainer}>
                        <p>Mon - Thu:</p>
                        <span>11:30 AM - 10:00 PM</span>
                    </div>
                    <div className={styles.hoursContainer}>
                        <p>Fri - Sat:</p>
                        <span>11:30 AM - 10:30 PM</span>
                    </div>
                </div>

                <div>
                    <h2>GOT FEEDBACK FOR US?</h2>
                    <AboutScreenLine />
                    <div className={styles.button}>
                        <p>FEEDBACK FORM</p>
                    </div>
                </div>
            </div>

            <div className={styles.imagesContainer}>
                <Image 
                    src={'/images/contact/contact-image-1.png'}
                    alt='Itacho Sushi building logo'
                    width={1000}
                    height={1000}
                    className={styles.contactImg}
                />

                <Image 
                    src={'/images/contact/contact-image-2.png'}
                    alt='Itacho Sushi building logo'
                    width={1000}
                    height={1000}
                    className={styles.contactImg}
                />

                <Image 
                    src={'/images/contact/contact-image-3.png'}
                    alt='Itacho Sushi building logo'
                    width={1000}
                    height={1000}
                    className={styles.contactImg}
                />
            </div>
        </section>
    )
}