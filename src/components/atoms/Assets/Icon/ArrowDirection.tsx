
interface ArrowDirectionProps {
  width: number;
  height: number;
  fill?: string;
  direction?: string;
}

const ArrowDirecton:React.FC<ArrowDirectionProps> = ({ width, height, fill, direction }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={ width }
         height={ height }
         viewBox="0 0 200 200"
         fill="none"
         style={{ 
           transformOrigin: '50% 50%',
           transform: `rotate(${ direction && direction === 'top' ? '90deg' : 
                                               direction === 'right' ? '180deg' :
                                               direction === 'bottom' ? '270deg' :
                                               '0deg' })`
         }}>
      <path fill={ fill ? fill : "#514F5A" } fillRule="evenodd" d="M133.64 107H51.126a6 6 0 1 1 0-12h84.514L95.134 54.494a6 6 0 0 1 8.485-8.485l49.498 49.497a5.987 5.987 0 0 1 1.752 4.494 5.989 5.989 0 0 1-1.752 4.494l-49.498 49.497a6 6 0 1 1-8.485-8.485L133.64 107Z" clipRule="evenodd"/>
    </svg>
  )
}

export default ArrowDirecton;