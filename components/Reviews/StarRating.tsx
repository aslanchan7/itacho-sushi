import Image from "next/image";
import styles from './StarRating.module.css';

function Star({ filled } : {filled: boolean}) {
    return (
        <Image 
            src={
                filled
                ? '/icons/rating-icon-filled.svg'
                : '/icons/rating-icon-empty.svg'
            }
            alt="star"
            width={1000}
            height={1000}
            className={styles.star}
        />
    )
}

export default function StarRating({ rating }: {rating: number}) {
    return (
        <div className={styles.container}>
            {[1, 2, 3, 4, 5].map((star) => {
                return <Star key={star} filled={rating >= star} />
            })}
        </div>
    )
}