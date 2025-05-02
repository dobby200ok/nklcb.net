// @ name : Badge
// @ description : 기본 아톰 뱃지 컴포넌트

import s from './Badge.module.scss';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface BadgeProps extends React.EmbedHTMLAttributes<HTMLEmbedElement> {
  children: ReactNode;
  color: string;
}

const Badge:React.FC<BadgeProps> = ({ children, color, ...props }) => {
    return (
        <>
            <em className={ classNames( s['badge'], s[`badge--${color}`] ) }
                {...props}>
                { children }
            </em>
        </>
    )
};

export default Badge;