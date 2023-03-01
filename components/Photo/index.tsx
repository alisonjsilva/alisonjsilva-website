import Image from "next/image"
import styles from './index.module.scss'

export default function Photo() {
    return (
        <div className={`flex justify-center ${styles.photoMask}`}>
            <Image src="/images/photo_alison_silva.png" className={`object-cover grayscale transition-all duration-1000 hover:grayscale-0 hover:scale-95 hover:rotate-1`} width={400} height={370} alt="Alison Silva - Full Stack Web Engineer" />
        </div>
    )
}