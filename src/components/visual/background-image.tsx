import Image from 'next/image'
import backgroundImage from '@/images/bg/background-call-to-action.webp'


const BackgroundImage = () => {

    return (
        <Image
            className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 filter grayscale brightness-50"
            src={backgroundImage}
            alt=""
            width={2347}
            height={1244}
            // unoptimized
            loading="lazy"
        />
    )
}

export default BackgroundImage;