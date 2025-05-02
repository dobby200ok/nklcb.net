
interface FilterProps {
  width: number;
  height: number;
  active?: boolean;
}

const Filter:React.FC<FilterProps> = ({ width, height, active }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={ width }
         height={ height }
         viewBox="0 0 200 200"
         fill="none">
      <rect width="169.412" height="16.941" x="15.294" y="40.706" fill="#514F5A" rx="8.471" />
      <rect width="169.412" height="16.941" x="15.294" y="91.529" fill="#514F5A" rx="8.471" />
      <rect width="169.412" height="16.941" x="15.294" y="142.353" fill="#514F5A" rx="8.471" />
      <circle cx={ active ?  '149.177' : '56.235' }
              cy="49.176"
              r="21.177"
              style={{ transition: "cx 0.5s ease-in-out" }}
              fill="#03C75A" />
      <circle cx="100"
              cy="100"
              r="21.177"
              fill="#FAE100" />
      <circle cx={ active ?  '56.176' : '149.412' }
              cy="150.824"
              r="21.177"
              style={{ transition: "cx 0.5s ease-in-out" }}
              fill="#E0311F" />
    </svg>
  )
}

export default Filter;