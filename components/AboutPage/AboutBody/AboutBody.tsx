import styles from './AboutBody.module.css';
import Image from 'next/image';
import AboutScreenLine from '../AboutScreenLine';

export default function AboutBody() {
    return (
        <section className={styles.container}>
            <div className={styles.subtitleContainer}>
                <h2 className={styles.subtitle}>ABOUT US</h2>
                <AboutScreenLine />
                <p className={styles.bodyText}>At the first Itacho Sushi in Southern California, our chefs use fresh, premium ingredients to craft delicious sushi. From our roots in Hong Kong, all the way to San Diego.</p>

                <h2 className={styles.subtitle}>OUR CRAFT</h2>
                <AboutScreenLine />
                <p className={styles.bodyText}>
                    {'At Itacho Sushi, we believe that great sushi should be accessible to everyone, which is why we offer an unbeatable combination of quality, variety, and value.\nWhether you\'re dining with family, friends, or on your own sushi adventure, Itacho Sushi is the perfect place to enjoy fresh, flavorful, and unlimited Japanese cuisine!'}
                </p>
            </div>

            <div className={styles.imagesContainer}>
                <Image 
                    src={'/images/about/about-image-1.png'}
                    alt='Itacho Sushi exterior'
                    width={1000}
                    height={1000}
                    className={styles.aboutImg}
                />

                <Image 
                    src={'/images/about/about-image-2.png'}
                    alt='Itacho Sushi chefs'
                    width={1000}
                    height={1000}
                    className={styles.aboutImg}
                />
            </div>
        </section>
    )
}