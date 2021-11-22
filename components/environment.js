import Space from "./space"

export default function Environment({ children, theme }) {

    const wrapperClassName = `max-w-4xl mx-auto pt-16 pb-16 md:pb-32 relative px-10 lg:px-0 z-10`

    return (
        <section className={`${theme === 'dark' ? 'bg-black' : 'bg-light'} relative`}>
            <div className={wrapperClassName}> 
                {children}
            </div>
            {theme === 'dark' &&
                <Space />
            }
        </section>
    )
}