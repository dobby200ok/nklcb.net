interface ArrowProps {
    width: number;
    height: number;
    fill?: string;
    direction?: string;
}

const Arrow:React.FC<ArrowProps> = ({ width, height, fill, direction }) => {

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
            <path fill={ fill ? fill : "#514F5A" }
                  fillRule="evenodd"
                  d="m83.485 100 45.506 45.506a6 6 0 0 1-8.485 8.485l-49.497-49.497A5.985 5.985 0 0 1 69.257 100a5.984 5.984 0 0 1 1.752-4.494l49.497-49.498a6 6 0 1 1 8.485 8.486L83.485 100Z" clipRule="evenodd" />
        </svg>
    )
}

export default Arrow;