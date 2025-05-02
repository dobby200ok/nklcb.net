'use client'

import s from './JobList.module.scss'

import classNames from 'classnames'

const EmptyJobList = () => {
  return (
    <div className={ classNames( s['empty-page'] ) }>
      <p className={ classNames( s['txt-empty'] ) }>
        아쉽지만, 조건에 부합하는 공고가 열려있지 않아요.
      </p>
    </div>
  )
}

export default EmptyJobList