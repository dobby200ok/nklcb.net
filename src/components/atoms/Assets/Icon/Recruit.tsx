
interface RecruitProps {
  width: number;
  height: number;
  fill?: string;
}

const Recruit:React.FC<RecruitProps> = ({ width, height, fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={ width }
         height={ height }
         viewBox="0 0 200 200"
         fill="none">
      <rect width="126" height="102" x="37" y="61.125" stroke={ fill ? fill : "#514F5A" } strokeWidth="12" rx="10"/>
      <path stroke={ fill ? fill : "#514F5A" } strokeLinecap="round" strokeWidth="12" d="M58 100.125h84"/>
      <path fill={ fill ? fill : "#514F5A" } fillRule="evenodd" d="M117.766 55.125c-2.722-7.161-9.65-12.25-17.766-12.25-8.116 0-15.044 5.089-17.766 12.25H69.737c3.081-13.875 15.46-24.25 30.263-24.25s27.182 10.375 30.263 24.25h-12.497Z" clipRule="evenodd"/>
    </svg>
  )
}

export default Recruit;