import Star from './icons/star'

import config from '../config'

export default function Space() {
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const stars = (count) => {
        let components = []
        Array(count).fill(0).map((i) => {
            const size = getRandomInt(3, 17)

            components.push(
                <div 
                    className="absolute z-0"
                    style={{ left: `${getRandomInt(0, 100)}%`, top: `${getRandomInt(0, 100)}%` }}
                >
                    <Star 
                        fill={config.theme.colors.white} 
                        width={size} 
                        height={size} 
                        opacity={getRandomInt(1, 10)/10} 
                    />
                </div>
            )
        })
        return components
    }

    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 mix-blend-overlay">
            {stars(180)}
        </div>
    )
}