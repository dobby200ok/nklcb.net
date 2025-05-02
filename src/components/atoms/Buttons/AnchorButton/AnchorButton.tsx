
// @ name : AnchorButton
// @ description : 앵커로 된 버튼 UI의 컴포넌트
// @ example : <AnchorButton href="https://www.naver.com" target="_blank">
//                앵커
// //          </AnchorButton>

import s from './AnchorButton.module.scss';

import classNames from 'classnames';
import { ReactNode } from 'react';

interface AnchorButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  primary?: boolean; // 메인 컬러 여부
  line?: boolean; // 라인 버튼 여부
  size?: 'small' | 'medium' | 'large'; // 버튼 사이즈
}

const AnchorButton:React.FC<AnchorButtonProps> = ({ children, primary = true, line = false, size = 'medium', ...props }) => {
  return (
    <a className={ classNames(s['btn'], 
       s[`btn--${size}`],
       s[`btn--${ primary ? 'primary' : 'secondary' }`], 
       line && s['btn--line']
        ) }
    { ...props }>
      { children }
    </a>
  )
}

export default AnchorButton;