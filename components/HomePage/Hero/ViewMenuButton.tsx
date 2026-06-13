import Image from 'next/image'
import styles from './ViewMenuButton.module.css'

export default function ViewMenuButton() {
    return (
        <div className={styles.container}>
            <Image 
                src={'/images/hero/hero-view-menu-button.svg'} 
                alt='' 
                width={10000} 
                height={10000} 
                className={styles.viewMenuButton}
            />

            <div className={styles.buttonContents}>
                <p className={styles.viewMenuText}>VIEW MENU</p>
                
                <Image 
                    src={'/images/hero/link-icon.svg'}
                    alt=''
                    width={10000}
                    height={10000}
                    className={styles.linkIcon}
                />
            </div>
        </div>
    )
}