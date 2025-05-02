interface ExportURLProps {
width: number;
height: number;
}

const ExportURL:React.FC<ExportURLProps> = ({ width, height }) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={ width }
         height={ height }
         viewBox="0 0 200 200"
         fill="none">
      <path fill="#BEBEBE" d="m125.775 44.69 7.807 13.522-83.384 48.142-7.807-13.522z" />
      <path fill="#BEBEBE" d="m140.092 143.383-8.16 13.312-89.853-55.081 8.16-13.312z" />
      <circle cx="132.296" cy="148.414" r="21.425" fill="#E0311F" transform="rotate(46.185 132.296 148.414)" />
      <circle cx="46.294" cy="99.593" r="23.421" fill="#0064FF" transform="rotate(60 46.294 99.593)" />
      <circle cx="136.439" cy="47.548" r="26.023" fill="#03C75A" transform="rotate(60 136.439 47.548)" />
    </svg>
  )
};

export default ExportURL;