// @ name : LinkButton
// @ description : 링크 형태의 버튼 컴포넌트

import s from './LinkButton.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  primary?: boolean;
  line?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const LinkButton:React.FC<LinkButtonProps> = ({ children, primary = true, line = false, size = 'medium', href, ...props }) => {
  return (
    <Link href={ href } 
          className={ classNames(s['btn'], 
          s[`btn--${size}`],
          s[`btn--${ primary ? 'primary' : 'secondary' }`], 
          line && s['btn--line']
          ) }
        { ...props }>
      { children }
    </Link>
  )
}

export default LinkButton;