interface SymbolProps {
  width: number;
  height: number;
}

const Symbol:React.FC<SymbolProps> = ({ width, height }) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={ width }
         height={ height }
         viewBox="0 0 200 200" 
         fill="none">
      <path fill="#E0311F" d="M160 40.298v74.627h-29.85V40.299z" />
      <path fill="#07B53B" d="M40.597 40.298H160v29.851H40.597z" />
      <path fill="#FFDE00" d="M40.597 85.075H160v29.851H40.597z" />
      <path fill="#03C75A" d="M40 159.701V40.298h29.851v119.403z" />
      <path fill="#2BC2BC" d="M40 129.851h120v29.851H40z" />
      <path fill="#E0311F" d="M160 114.925v44.776h-29.851v-44.776z" />
    </svg>
    )
}

export default Symbol;