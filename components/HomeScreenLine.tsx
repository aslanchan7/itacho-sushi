import Image from "next/image";

export default function HomeScreenLine() {
    return (
        <Image 
            src={'/images/home-screen-line.svg'}
            alt=''
            width={10000}
            height={10000}
            style={{
                'width': '54.3%',
                'marginTop': '0.94vw',
                'marginBottom': '1.9vw',
                'zIndex': 2
            }}
        />
    )
}

