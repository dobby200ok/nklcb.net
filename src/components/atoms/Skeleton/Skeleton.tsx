// @ name : Skeleton
// @ description : 스켈레톤 UI를 렌더합니다.

import s from './Skeleton.module.scss';
import classNames from 'classnames';
import className from '@/constants/className';
import { ReactNode } from 'react';

interface SkeletonProps {
  children: ReactNode
}

const Skeleton:React.FC<SkeletonProps> = ({ children }) => {

  return (
    <>
      <div className={ classNames( s['box-skeleton'] ) }>
        <span className={ className.a11y }>
          컨텐츠를 불러오는 중입니다.
        </span>
        <span aria-hidden="true"
              className={ classNames( s['skeleton-content'] ) }>
          { children }
        </span>
      </div>
    </>
  )
}

export default Skeleton;