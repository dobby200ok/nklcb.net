// @ name : Button
// @ description : 기본 아톰 버튼 컴포넌트

import s from './Button.module.scss';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  primary?: boolean;
  line?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Button:React.FC<ButtonProps> = ({ children, primary = true, line = false, size = 'medium', ...props }) => {
  return (
    <button type="button"
            className={ classNames(s['btn'], 
            s[`btn--${size}`],
            s[`btn--${ primary ? 'primary' : 'secondary' }`], 
            line && s['btn--line']
            ) }
            { ...props }>
      { children }
    </button>
  )
}

export default Button;