
// @ name : Logo
// @ description : 공통 로고 SVG 컴포넌트. 사이즈는 118/20 비율로 입력해야 합니다.
// @ example : <Logo width={ 118 }  height={ 20 } />

import { ratioUtils } from "@/utils/utils";

interface LogoProps {
  width: number;
  height?: number;
}

const Logo:React.FC<LogoProps> = ({ width, height }) => {

  const ratio = ratioUtils.getRatio(118, 20),
        ratioSize = ratioUtils.getRatioSize(ratio, width, height),
        ratioWidth = ratioSize.width,
        ratioHeight = ratioSize.height;

return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg"
          width={ ratioWidth }
          height={ ratioHeight } 
          viewBox="0 0 1180 200"
          aria-hidden="true"
          fill="none">
        <path fill="#BEBEBE" fillRule="evenodd" d="M681 50v75H530v25h151v50H480V75h151V50H481V0h200v50Z"
          clipRule="evenodd" />
        <path fill="#07B53B" d="M481 0h200v50H481z" />
        <path fill="#BEBEBE" fillRule="evenodd" d="M240 50V0h200v200h-50v-75H240V75h150V50H240Z" clipRule="evenodd" />
        <path fill="#FFDE00" d="M240 75h200v50H240z" />
        <path fill="#BEBEBE" fillRule="evenodd" d="M0 150v50h200v-50H50V0H0v150Z" clipRule="evenodd" />
        <path fill="#03C75A" d="M0 200V0h50v200z" />
        <path fill="#BEBEBE" fillRule="evenodd" d="M961 1v200h200V1h-50v75h-100V1h-50Zm150 125h-100v25h100v-25Z"
          clipRule="evenodd" />
        <path fill="#2BC2BC" d="M961 151h200v50H961z" />
        <path fill="#BEBEBE" fillRule="evenodd" d="M721 50V0h200v200h-50v-75H721V75h150V50H721Z" clipRule="evenodd" />
        <path fill="#E0311F" d="M921 0v125h-50V0zM921 125v75h-50v-75z" />
      </svg>
    </>
  )
}

export default Logo;