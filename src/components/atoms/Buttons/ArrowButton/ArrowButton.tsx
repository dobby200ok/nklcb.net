// @ name : ArrowButton
// @ description : 방향 화살표 UI를 가진 버튼 컴포넌트. direction으로 받는 인자에 따라 화살표의 방향을 달리합니다.

import { ReactNode } from 'react'
import classNames from 'classnames';

import s from './ArrowButton.module.scss'
import Icon from '../../Assets/Icon';
import className from '@/constants/className'

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    fill?: string;
    direction?: string;
}

const ArrowButton:React.FC<ArrowButtonProps> = ({ children, fill, direction, ...props }) => {
    
    
    return (
        <button type="button"
                className={ classNames( s['btn-arrow'], direction && s[`btn-arrow--${direction}`] ) }
                { ...props }>
            <Icon.Arrow width={ 32 }
                        height={ 32 }
                        fill={ fill }
                        direction={ direction } />
            <span className={ className.a11y }>{ children }</span>
        </button>
    )
}

export default ArrowButton;