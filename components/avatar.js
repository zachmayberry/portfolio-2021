import Image from 'next/image'

import Squircle from './icons/squircle'

import config from '../config'

export default function Avatar() {
    return (
        <div className="flex justify-center items-center w-20">
            <div className="absolute">
                <Image 
                    src="/face.png"
                    alt="Picture of the author"
                    width={60}
                    height={80.69}
                />
            </div>

            <Squircle 
                fill={config.theme.colors.green} 
                width={80} 
                height={80}
            />
        </div>
    )
}