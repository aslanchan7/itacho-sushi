import Image from "next/image";
import styles from './ReviewCard.module.css';
import StarRating from "./StarRating";

export type ReviewCardProps = {
    name: string;
    description: string;
    rating: number;
    boxType: number;
}

export default function ReviewCard(props: ReviewCardProps) {
    return (
        <div className={`${styles.container} ${styles[`dimensions${props.boxType}`]}`}>
            <StarRating rating={props.rating} />
            <p className={styles.name}>{props.name}</p>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}