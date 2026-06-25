'use client'
import styles from './menu.module.css'
import { useState } from 'react'
import Image from 'next/image'
import MenuPricing from '@/components/MenuPage/MenuPricing'
import MenuTabBar from '@/components/MenuPage/MenuTabBar'
import MenuContent from '@/components/MenuPage/MenuContent'

export type MenuType = 'lunch' | 'dinner'

export default function Menu() {
    const [activeMenu, setActiveMenu] = useState<MenuType>('lunch')

    return (
        <main>
            <div className={styles.titleContainer}>
                <h1 className={styles.titleText}>{activeMenu === 'lunch' ? "LUNCH MENU" : "DINNER MENU"}</h1>
                <div className='flex flex-row gap-[1.04vw]'>
                    <button 
                        className={activeMenu === 'lunch' ? styles.activeButton : styles.unactiveButton}
                        onClick={() => {setActiveMenu('lunch')}}
                    >
                        {
                            activeMenu === 'lunch'
                            ? (
                                <Image 
                                    src={'/images/menu/meal-active-button.svg'} 
                                    alt={'Lunch Menu Button'} 
                                    height={1000}
                                    width={1000}
                                    className={styles.activeButtonImg}
                                />
                            )
                            : null
                        }
                        <h2>LUNCH</h2>
                        <p>11:30 AM - 4 PM</p>
                    </button>
                    
                    <button 
                        className={activeMenu === 'dinner' ? styles.activeButton : styles.unactiveButton}
                        onClick={() => {setActiveMenu('dinner')}}
                    >
                        {
                            activeMenu === 'dinner'
                            ? (
                                <Image 
                                    src={'/images/menu/meal-active-button.svg'} 
                                    alt={'Dinner Menu Button'} 
                                    height={1000}
                                    width={1000}
                                    className={styles.activeButtonImg}
                                />
                            )
                            : null
                        }
                        <h2>DINNER</h2>
                        <p>4 PM - 10 PM</p>
                    </button>
                </div>
            </div>

            <MenuPricing menuType={activeMenu} />
            <MenuTabBar menuType={activeMenu} />
            <MenuContent menuType={activeMenu} />
        </main>
    )
}