import Image from 'next/image'
import { Parallax, Background } from 'react-parallax'

export default function Header({ title = '', subtitle = null, img}) {
    return (
        <div className="relative z-0">
            <Parallax strength={300} className="h-screen-half md:h-screen w-screen">
                <div className="text-center max-w-6xl mx-auto md:space-x-12 px-10 lg:px-0">
                    <h1 className="uppercase font-serif font-bold text-5xl md:text-6xl">{title}</h1>
                    <h2 className="font-bold text-3xl md:text-4xl opacity-30 pt-2">{subtitle}</h2>
                </div>
                <Background className="pt-52 w-screen max-w-4xl px-10">
                    <Image
                        src={img}
                        alt="SUH"
                    />
                </Background>
            </Parallax>
        </div>
    )
}