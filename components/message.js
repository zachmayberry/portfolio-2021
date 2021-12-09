export default function Message({ title = '', subtitle = null, summary = null, theme = 'light' }) {
    return (
        <div className={`max-w-2xl py-6 md:py-10 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <div>
                {title &&
                    <h1 className="text-5xl md:text-6xl font-bold font-serif uppercase">
                        {title}
                    </h1>
                }

                {subtitle &&
                    <h2 className="text-3xl font-bold pt-8">
                        {subtitle}
                    </h2>
                }

                {summary &&
                    <p className="text-2xl pt-4 md:leading-snug">
                        {summary}
                    </p>
                }
            </div>
        </div>
    )
}