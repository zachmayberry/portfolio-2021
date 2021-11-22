export default function Response({ message }) {
    return (
        <div className="max-w-3xl mx-auto text-black flex justify-end">
            <div className="border-opacity-10 border-black border-2 rounded-lg p-4 mb-6 text-right cursor-pointer">
                {message &&
                    <p className="text-xl font-bold">{message}</p>
                }
            </div>
        </div>
    )
}