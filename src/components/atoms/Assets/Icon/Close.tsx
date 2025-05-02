interface CloseProps {
  width: number;
  height: number;
  fill?: string;
}

const Close:React.FC<CloseProps> = ({ width, height, fill }) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={ width }
         height={ height }
         viewBox="0 0 200 200"
         fill="none">
      <path fill={ fill ? fill : '#514F5A' } fillRule="evenodd"
        d="M57.574 133.941a6 6 0 1 0 8.485 8.485l33.94-33.941 33.942 33.941a6 6 0 0 0 8.485-8.485L108.485 100l33.941-33.941a6 6 0 0 0-8.485-8.485L100 91.514l-33.941-33.94a6 6 0 0 0-8.485 8.485L91.513 100l-33.94 33.941Z"
        clipRule="evenodd" />
    </svg>
  )
}

export default Close;