import Head from 'next/head'

import Header from '../../components/header'
import suhImage from '../../public/suhhub-top-screenshot@2x.png'

export default function Index() {
    return (
        <div className="bg-light min-h-screen w-screen overflow-hidden">
            <Head>
            <title>StartUp Health - Portfolio of Zachary Mayberry</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="pt-32">
                <Header 
                    title="Design. Build. Repeat."
                    subtitle="StartUp Health"
                    img={suhImage}
                />

                <div className="bg-white md:-mt-60 h-screen relative z-10">
                    <div className="md:flex max-w-6xl mx-auto pt-16 md:space-x-12 px-10 lg:px-0">
                        <div className="flex-1">
                            <h3 className="opacity-30 font-bold uppercase">About</h3>
                            <h4 className="font-bold text-2xl pb-2">Rethinking health-connection</h4>
                            <p className="leading-relaxed">I worked with StartUp Health to rethink and rebuild their network to help health-focused entrepreneurs, investors, and advisors have a platform to connect.</p>
                        </div>

                        <div className="flex-1">
                            <h3 className="opacity-30 font-bold uppercase">Details</h3>
                            <ul className="font-bold text-lg">
                                <li className="border-b border-black border-opacity-30 py-2">UX/UI Design &amp; Front-end Development</li>
                                <li className="border-b border-black border-opacity-30 py-2">Sketch, Invision, Framer, Backbone.js</li>
                                <li className="py-2">Worked together 2012 - 2017</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-white -mt-60 h-screen relative z-10">

                </div>
            </main>
        </div>
    )
}
