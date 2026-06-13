import HomeScreenLine from '../HomeScreenLine'
import ReviewCard, { ReviewCardProps } from './ReviewCard'
import styles from './Reviews.module.css'
import Image from 'next/image'

export default function Reviews() {
    const reviews: ReviewCardProps[] = [
        { name: 'Gwendalyn P.', description: 'Come here hungry. An ayce sushi place serving generous slices of fresh fish - unlike most places that try to give you a ton of rice and wafer slim slices of fish', rating: 5, boxType: 0 },
        { name: 'Chanel Y.', description: 'First timer at an all you can eat sushi place, and babyyyyyy it is a game changer. I ate all the things and I left with a smile on my face. I will definitely be coming back!!', rating: 5, boxType: 0 },
        { name: 'Isaac J.', description: 'All you can eat sushi and it did not disappoint. Cravings were satisfied.', rating: 4, boxType: 1 },
        { name: 'Joy G.', description: 'We went for lunch. AYCE for 2 people came to about $65. Nice inside. Staff was very nice and helpful. I wish there was a tablet ordering system or similar. I could see how if we came at a busy time there would he a delay in ordering but otherwise no complaints!', rating: 4, boxType: 2 },
        { name: 'Tom T.', description: 'Come here hungry. An ayce sushi place serving generous slices of fresh fish - unlike most places that try to give you a ton of rice and wafer slim slices of fish', rating: 5, boxType: 0 },
        { name: 'Amanda N.', description: 'Overall, enjoyed my experience. Price is worth the AYCE. Military, 65+ years, and students get a small discount so bring your ID when you go!', rating: 5, boxType: 0 },
        { name: 'Vivi V.', description: 'All you can eat sushi and it did not disappoint. Cravings were satisfied.', rating: 4, boxType: 1 },
        { name: 'Jordan D.', description: 'Been looking for a new AYCE spot in the region and Itacho did not disappoint! I love Little Sakana and go often so I was curious how this place was different - I think you get jus different selections of rolls and apps here + a few more extras that we loved so we will definitely be coming back.', rating: 4, boxType: 2 },
    ]

    return (
        <section className={styles.container}>
            <h3>REVIEWS</h3>
            <HomeScreenLine />

            <div className={styles.reviewCardContainer}>
                <div className={styles.reviewCardColumn}>
                    <ReviewCard 
                        name={reviews[0].name} 
                        description={reviews[0].description} 
                        rating={reviews[0].rating} 
                        boxType={reviews[0].boxType} 
                    />
                    <ReviewCard 
                        name={reviews[1].name} 
                        description={reviews[1].description} 
                        rating={reviews[1].rating} 
                        boxType={reviews[1].boxType} 
                    />
                </div>
                
                <div className={styles.reviewCardColumn}>
                    <ReviewCard 
                        name={reviews[2].name} 
                        description={reviews[2].description} 
                        rating={reviews[2].rating} 
                        boxType={reviews[2].boxType} 
                    />
                    <ReviewCard 
                        name={reviews[3].name} 
                        description={reviews[3].description} 
                        rating={reviews[3].rating} 
                        boxType={reviews[3].boxType} 
                    />

                </div>
                
                <div className={styles.reviewCardColumn}>
                    <ReviewCard 
                        name={reviews[4].name} 
                        description={reviews[4].description} 
                        rating={reviews[4].rating} 
                        boxType={reviews[4].boxType} 
                    />
                    <ReviewCard 
                        name={reviews[5].name} 
                        description={reviews[5].description} 
                        rating={reviews[5].rating} 
                        boxType={reviews[5].boxType} 
                    />
                </div>
                
                <div className={styles.reviewCardColumn}>
                    <ReviewCard 
                        name={reviews[6].name} 
                        description={reviews[6].description} 
                        rating={reviews[6].rating} 
                        boxType={reviews[6].boxType} 
                    />
                    <ReviewCard 
                        name={reviews[7].name} 
                        description={reviews[7].description} 
                        rating={reviews[7].rating} 
                        boxType={reviews[7].boxType} 
                    />
                </div>
            </div>

            <Image 
                src={'/images/reviews/reviews-brush-stroke-decoration.svg'}
                alt=''
                width={1000}
                height={1000}
                className={styles.decorationStroke}
            />
        </section>
    )
}