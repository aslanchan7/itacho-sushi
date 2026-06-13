import Link from 'next/link'
import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Image 
                src={'/itacho-sushi-logo-white-text.svg'}
                alt='Itacho Sushi Logo'
                width={10000}
                height={10000}
                className={styles.logo}
            />

            <ul className={styles.list}>
                <li><Link href={'/'}>HOME</Link></li>
                <li>MENU</li>
                <li><Link href={'/about'}>ABOUT</Link></li>
                <li><Link href={'/contact-us'}>CONTACT US</Link></li>
            </ul>

            <div className={styles.orderButton}>
                <p>ORDER ONLINE</p>
            </div>
        </div>
    )
}