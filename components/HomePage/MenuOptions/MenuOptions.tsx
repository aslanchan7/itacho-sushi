import HomeScreenLine from '../HomeScreenLine'
import MenuOptionCard from './MenuOptionCard'
import styles from './MenuOptions.module.css'
import Image from 'next/image'

export default function MenuOptions() {
    return (
        <section className={styles.container}>
            <Image 
                src={'/images/menuOptions/menu-brush-stroke-decoration.svg'}
                alt=''
                width={1000}
                height={1000}
                className={styles.brushStroke}
            />
            <h3>MENU OPTIONS</h3>
            <HomeScreenLine />
            <div className='flex flex-row'>
                <MenuOptionCard 
                    mealName={'LUNCH'} 
                    mealTime={'11:30 AM - 4:00 PM'} 
                    tier={'Premium'} 
                    cost={'$29.99'} 
                    description={'Our luxurious dinner experience at a deliciously discounted rate.'} 
                    color='red'
                />
                <Image 
                    src={'/images/home-screen-vertical-line.svg'}
                    alt=''
                    width={1000}
                    height={1000}
                    className={styles.verticalLine}
                />
                <MenuOptionCard 
                    mealName={'DINNER'} 
                    mealTime={'4:00 PM - 10:00 PM'} 
                    tier={'Platinum'} 
                    cost={'$42.99'} 
                    description={'Our luxurious dinner experience featuring house specials.'} 
                    color='black'
                />
            </div>
        </section>
    )
}