'use client'
import { useState } from 'react'
import styles from './Accordion.module.css'
import Image from 'next/image'

type AccordionItem = {
    title: string
    content: string
}

const items: AccordionItem[] = [
    { title: 'Student Discount', content: 'Students get 10% off All You Can Eat, Monday through Thursday only.\nMust show valid student ID.' },
    { title: 'Senior Discount', content: 'Seniors 65+ get 10% off All You Can Eat, all week.\nMust show valid ID.' },
    { title: 'Military Discount', content: 'Military personnel get 10% off All You Can Eat, all week.\nMust show valid ID.' }
]

export default function Accordion() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set())
    
    const toggle = (index: number) => {
        setOpenItems(prev => {
            const next = new Set(prev);
            next.has(index) ? next.delete(index) : next.add(index);
            return next;
        })
    }

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <div key={index} className={styles.item}>
                    <button 
                        className={styles.button}
                        onClick={() => toggle(index)}
                    >
                        <div className={styles.buttonTitle}>
                            <span>{item.title}</span>
                            <Image 
                                src={openItems.has(index) ? '/icons/accordion-arrow-up.svg' : '/icons/accordion-arrow-down.svg'}
                                alt=''
                                width={1000}
                                height={1000}
                                className={styles.arrow}
                            />
                        </div>
                        {openItems.has(index) && 
                            <p className={styles.content}>
                                {item.content}
                            </p>
                        }
                    </button>
                </div>
            ))}
        </div>
    )
}