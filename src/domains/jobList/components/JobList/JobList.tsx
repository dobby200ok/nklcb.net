'use client';

import s from './JobList.module.scss';

import { JobListProps } from "@/types/JobListProps";

import useJobList from '@/domains/jobList/api/queries';

import { JobListItemProps } from '@/types/JobItemProps';

import JobCardItem from '@/components/molecules/JobCardItem'
import SkeletonJobList from './SkeletonJobList';

import EmptyJobList from '@/domains/jobList/components/JobList/EmptyJobList';

const JobList:React.FC<JobListProps> = ({ page, keyword, filter }) => {
  
  const { data: jobList, isLoading, isFetching } = useJobList(page, keyword, filter);

  if (isLoading || isFetching) return <SkeletonJobList />

  if (! jobList || jobList.data.length === 0) {
    return <EmptyJobList />
  }

  return (
    <>
      <ul className={ s['list-result'] }>
        {
          jobList?.data?.map((e: JobListItemProps) => (
            <JobCardItem key={ e._id }
                         _id={ e._id }
                         company={ e.company }
                         title={ e.title }
                         position={ e.position }
                         positionDetail={ e.positionDetail }
                         entryLevel={ e.entryLevel }
                         date={ e.date }
                         employmentType={ e.employmentType } />
          ))
        }
      </ul>
    </>
  )
}

export default JobList;