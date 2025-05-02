interface CautionProps {
  width: number;
  height: number;
  fill?: string;
}

const Caution:React.FC<CautionProps> = ({ width, height, fill}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
        width={ width }
        height={ height }
        viewBox="0 0 200 200"
        fill="none">
      <rect width="128" height="128" x="36" y="36" stroke={ fill ? fill : "#E0311F" } strokeWidth="12" rx="64" />
      <path fill={ fill ? fill : "#E0311F" } d="M92.5 70a7.5 7.5 0 0 1 15 0v36a7.5 7.5 0 0 1-15 0V70Z" />
      <circle cx="100" cy="130.5" r="7" fill={ fill ? fill : "#E0311F" } />
    </svg>
  )
}

export default Caution;