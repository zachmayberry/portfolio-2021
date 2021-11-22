import Head from 'next/head'

import Environment from '../components/environment'
import Message from '../components/message'
import Avatar from '../components/avatar'
import Projects from '../components/projects'

export default function Index() {
  return (
    <div className="bg-light min-h-screen w-screen overflow-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Environment theme="light">
          <div className="flex flex-col-reverse md:flex-row md:items-end md:justify-between relative">
            <Message
              title={
                [
                  <span className="hidden md:inline leading-tight">Hi! </span>,
                  'I’m a ', 
                  <span className="text-green leading-tight">
                    Product Designer
                  </span>, 
                  <span className="leading-tight"> with 10+ years experience in the digital space.</span>
                ]
              }
            />

            <Avatar />
          </div>
        </Environment>

        <Environment theme="dark">
          <Message
            title="The Digital Space."
            subtitle="Since 2008, I’ve worked with companies to design &amp; build products with an impact."
            summary={
              [
                <span className="opacity-70">So far that has ranged from a mission to </span>, 
                <span className="font-bold">improve the health &amp; well-being of everyone on the planet </span>, 
                <span className="opacity-70">to changing the media landscape by </span>, 
                <span className="font-bold text-opacity-100">empowering citizen journalists</span>, 
                <span className="opacity-70">. Others include helping a museum </span>, 
                <span className="font-bold text-opacity-100">enhance an exhibit for low-vision/blind visitors </span>, 
                <span className="opacity-70">to providing physicians with the tools to </span>, 
                <span className="font-bold text-opacity-100">heal patients with binaural beat therapies</span>, 
                '.'
              ]
            }
            theme="dark"
          />

          <Projects />
        </Environment>

      </main>
    </div>
  )
}
