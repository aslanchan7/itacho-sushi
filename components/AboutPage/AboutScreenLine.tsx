import Image from "next/image";

export default function HomeScreenLine() {
    return (
        <Image 
            src={'/images/about-screen-line.svg'}
            alt=''
            width={10000}
            height={10000}
            style={{
                'width': '19.4vw',
                'marginTop': '0.52vw',
                'marginBottom': '1.04vw',
                'zIndex': 2
            }}
        />
    )
}

