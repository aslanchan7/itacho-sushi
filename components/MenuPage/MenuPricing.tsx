import { MenuType } from '@/app/menu/page';
import styles from './MenuPricing.module.css'
import Image from 'next/image';

export default function MenuPricing({ menuType }: {menuType: MenuType}) {
    return (
        <section className={styles.container}>
            <div className={styles.horizontalLine}></div>
            {
                menuType === 'lunch'
                ? (
                    <div className='flex flex-col'>
                        <div className={styles.menuTierContainer}>
                            <h2>PREMIUM</h2>
                            <p>Monday - Friday</p>
                        </div>

                        <div className={styles.priceContainer}>
                            <div className={styles.adultPriceContainer}>
                                <h2 className={styles.adultPriceText}>$29.99</h2>
                                <Image 
                                    src={'/images/menu/price-underline.svg'} 
                                    alt={''}
                                    width={1000}
                                    height={1000} 
                                    className={styles.priceUnderline}
                                />
                            </div>
                            <div className={styles.kidsPriceContainer}>
                                <p className={styles.kidsText}>Kids 4-8</p>
                                <p className={styles.kidsPriceText}>$15.99</p>
                            </div>
                            <div className={styles.kidsPriceContainer}>
                                <p className={styles.kidsText}>Kids 9-11</p>
                                <p className={styles.kidsPriceText}>$21.99</p>
                            </div>
                        </div>
                    </div>
                )

                : (
                    <h1>DINNER</h1>
                )
            }
        </section>
    )
}