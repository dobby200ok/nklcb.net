
interface BugProps {
  width: number;
  height: number;
  fill?: string;
}

const Bug:React.FC<BugProps> = ({ width, height, fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
        width={ width }
        height={ height }
        viewBox="0 0 200 200"
        fill="none">
        <path fill={ fill ? fill : '#E0311F' } fillRule="evenodd"
          d="M56.243 47.485A6 6 0 0 1 64.728 39l11.314 11.314c.078.078.154.158.227.24A39.821 39.821 0 0 1 100 42.757a39.82 39.82 0 0 1 23.903 7.925c.107-.126.22-.25.34-.368L135.556 39a6.001 6.001 0 0 1 8.486 8.485L132.728 58.8c-.134.133-.272.26-.414.378A39.822 39.822 0 0 1 140 82.757v1h16a6 6 0 1 1 0 12h-16v7h16a6 6 0 0 1 0 12h-16v7h16a6 6 0 0 1 0 12h-16a6.018 6.018 0 0 1-1.48-.183c-4.717 16.836-20.177 29.183-38.52 29.183-18.343 0-33.803-12.347-38.52-29.183-.474.12-.97.183-1.48.183H44a6 6 0 1 1 0-12h16v-7H44a6 6 0 1 1 0-12h16v-7H44a6 6 0 0 1 0-12h16v-1a39.821 39.821 0 0 1 7.797-23.73 6.108 6.108 0 0 1-.24-.228L56.242 47.485Z"
          clipRule="evenodd" />
        <circle cx="100" cy="123" r="7" fill="#fff" />
        <path fill="#fff" d="M93 77a7 7 0 1 1 14 0v25a7 7 0 1 1-14 0V77Z" />
    </svg>
  )
}

export default Bug;