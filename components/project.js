import Image from 'next/image'

export default function Project({ name, summary, color, image, imageWidth, imageHeight }) {
    return (
        <div 
            className="rounded-2xl p-4 text-white mb-5 max-w-md cursor-pointer"
            style={{ backgroundColor: color }}
        >   
            <div className="relative rounded-2xl h-60 mb-2 overflow-hidden">
                <div className="absolute" style={{ transform: 'translate(-50%, -50%) ', top: '50%', left: '50%' }}>
                    <div style={{ transform: 'rotate(315deg)', width: `${imageWidth}px` }}>
                        <Image src={image} width={imageWidth} height={imageHeight}/>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h1 className="font-bold text-2xl pb-2">{name}</h1>
                <p className="text-lg leading-snug">{summary}</p>
            </div>
        </div>
    )
}