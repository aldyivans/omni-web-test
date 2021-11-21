export const ArrowDown = ({ size = 16, className }) => {
  return (
    <svg
      width={size}
      height={size}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      color="#fff"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        fillRule="evenodd"
        stroke="none"
        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export const ProgressArrow = ({ size = 24, className }) => {
  return (
    <svg
      width={size}
      height={size}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      color="#fff"
      className={className}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        stroke="none"
        d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        stroke="none"
        d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export const Close = ({ size = 34, className }) => {
  return (
    <svg
      width={size}
      height={size}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      color="#fff"
      className={className}
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144m224 0L144 368"
      ></path>
    </svg>
  )
}
