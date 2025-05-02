// @ name : SectionTitle
// @ description : index에서 생성되는 섹션들에 대한 타이틀 컴포넌트

import s from './SectionTitle.module.scss';

import { ReactNode } from 'react';
import classNames from 'classnames';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle:React.FC<SectionTitleProps> = ({ children, align = 'left', ...props }) => {
  return (
    <h3 className={ classNames(s['tit-section'], s[`tit-section--${align}`]) }
        { ...props }>
        { children }
    </h3>
  )
}

export default SectionTitle;