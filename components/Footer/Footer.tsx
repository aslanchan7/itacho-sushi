import styles from './Footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <section className={styles.container}>
            <div className={styles.gradient} />
            <div className={styles.infoTextContainer}>
                <p className={styles.addressText}>{'7319 Clairemont Mesa Blvd,\nSan Diego, CA 92111'}</p>
                <div className={styles.hoursTextContainer}>
                    <p className={styles.daysText}>Mon - Thu:</p>
                    <p className={styles.hoursText}>11:30 AM - 10:00 PM</p>
                </div>

                <div className={styles.hoursTextContainer}>
                    <p className={styles.daysText}>Fri - Sat:</p>
                    <p className={styles.hoursText}>11:30 AM - 10:30 PM</p>
                </div>
            </div>

            <Image 
                src={'/itacho-sushi-logo-black-text.svg'}
                alt='Itacho Sushi Logo'
                width={1000}
                height={1000}
                className={styles.logoImg}
            />

            <div className={styles.socialsContainer}>
                <p>Find us on social media!</p>
                <div className='flex flex-row gap-[1.56vw]'>
                    <Image 
                        src={'/icons/instagram-logo.svg'}
                        alt='Instagram Logo'
                        width={1000}
                        height={1000}
                        className={styles.socialsLogo}
                    />

                    <Image 
                        src={'/icons/tiktok-logo.svg'}
                        alt='Instagram Logo'
                        width={1000}
                        height={1000}
                        className={styles.socialsLogo}
                    />

                    <Image 
                        src={'/icons/facebook-logo.svg'}
                        alt='Instagram Logo'
                        width={1000}
                        height={1000}
                        className={styles.socialsLogo}
                    />
                </div>
            </div>

        </section>
    )
}