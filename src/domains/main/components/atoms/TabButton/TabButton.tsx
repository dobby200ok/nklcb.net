// @ name : TabButton
// @ description : index에서 사용되는 탭 버튼에 대한 컴포넌트

import s from './TabButton.module.scss'

import { ReactNode } from 'react'

import classNames from 'classnames'

interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive: boolean;
  value: string;
  click: (k: string) => void;
}

const TabButton:React.FC<TabButtonProps> = ({ children, isActive, value, click, ...props }) => {
  return (
    <button role="tab"
            aria-selected={ isActive }
            onClick={() => click(value)}
            className={ classNames(s['btn-tab'], isActive && s['btn-tab--active'] ) }
            type="button"
            {...props} >
      { children }
    </button>
  )
}

export default TabButton;