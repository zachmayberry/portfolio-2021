export default function Squircle({ fill, width, height }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 80 80"
        >
            <path
                fill={fill}
                fillRule="evenodd"
                d="M40 0C8 0 0 8 0 40s8 40 40 40 40-8 40-40S72 0 40 0z"
                clipRule="evenodd"
            >
            </path>
        </svg>
    )
}