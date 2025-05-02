
import s from './JobList.module.scss';

import classNames from 'classnames';

import SkeletonJobCardItem from '@/components/molecules/JobCardItem/SkeletonJobCardItem';

const SkeletonJobList = () => {

  return (
    <div className={ classNames(s['list-result']) }>
      {
        Array.from({ length: 15 }).map(() => (
          <SkeletonJobCardItem key={ crypto.randomUUID() } />
        ))
      }
    </div>
  )
}

export default SkeletonJobList;