import styles from './MenuOptionCard.module.css'
import Image from 'next/image'

export type MenuOptionCardProps = {
    mealName: string
    mealTime: string
    tier: string
    cost: string
    description: string
    color: string
}

export default function MenuOptionCard(props: MenuOptionCardProps) {
    return (
        <div className={styles.container}>
            <div className='flex flex-row w-[35.5vw]'>
                <Image 
                    src={
                        props.color === "red"
                        ? '/images/menuOptions/menu-option-card-title-red.svg'
                        : '/images/menuOptions/menu-option-card-title-black.svg'
                    }
                    alt=''
                    width={1000}
                    height={1000}
                    className={styles.titleImg} 
                />
                <Image 
                    src={
                        props.mealName === "LUNCH"
                        ? '/images/menuOptions/menu-option-card-lunch.svg'
                        : '/images/menuOptions/menu-option-card-dinner.svg'
                    }
                    alt={props.mealName}
                    width={1000}
                    height={1000}
                    className={styles.mealNameText}
                />
                
                <p className={styles.mealTimeText}>
                    {props.mealTime}
                </p>
            </div>

            <div className={styles.tierCostWrapper}>
                <p className={styles.tierText}>
                    {props.tier}
                </p>
                
                <p className={styles.costText}>
                    {props.cost}
                </p>
            </div>

            <p className={styles.description}>
                {props.description}
            </p>

            <div className={styles.viewMenuContainer}>
                <Image 
                    src={
                        props.color === "red"
                        ? '/images/menuOptions/view-menu-button-red.svg'
                        : '/images/menuOptions/view-menu-button-black.svg'
                    }
                    alt=''
                    width={1000}
                    height={1000}
                    className={styles.viewMenuButton}
                />

                <p>
                    VIEW MENU
                </p>
            </div>
        </div>
    )
}