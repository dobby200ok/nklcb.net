
interface TossProps {
  width: number;
  height: number;
}

const Toss:React.FC<TossProps> = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={ width }
         height={ height }
         viewBox="0 0 48 48"
         fill="none"
         aria-hidden='true'>
      <path fill="#BEBEBE" fillRule="evenodd" d="M0 36v12h48V36H12V0H0v36Z" clipRule="evenodd"/>
      <path fill="#BEBEBE" d="M48 18v12H0V18z"/>
      <path fill="#BEBEBE" d="M0 48V0h12v48z"/>
      <path fill="#0064FF" d="M48 0v12H0V0z"/>
    </svg>
  )
}

export default Toss;